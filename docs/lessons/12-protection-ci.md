# লেসন ১২: ব্রাঞ্চ প্রোটেকশন ও GitHub Actions (CI)

**লক্ষ্য:** `main`-কে নিরাপদ রাখা: কেউ (আপনিও) পরীক্ষা ছাড়া কিছু ঢোকাতে পারবে না।

## ১. CI কী
প্রতি push/PR-এ স্বয়ংক্রিয়ভাবে `lint` ও `build` চালিয়ে দেখা কিছু ভেঙেছে কি না।

## ২. ওয়ার্কফ্লো `.github/workflows/ci.yml`
অ্যাকশনের ভার্সনগুলো এই সময়ে (`gh api repos/<owner>/<repo>/releases/latest` দিয়ে ✅ যাচাইকৃত): `actions/checkout@v7`, `actions/setup-node@v7`, `pnpm/action-setup@v6`। ব্যবহারের আগে আবার মিলিয়ে নিন।
```yaml
name: CI

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
      - uses: pnpm/action-setup@v6   # version বাদ: package.json-এর packageManager (pnpm v11+) থেকে নেয় ✅ (action README)
      - uses: actions/setup-node@v7
        with:
          node-version: lts/*
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm build
```
- `permissions: contents: read`: ন্যূনতম অনুমতির নীতি (least privilege)।
- `--frozen-lockfile`: lockfile মিলতে হবে, নইলে ব্যর্থ। CI-তে নির্ভরযোগ্যতা।
- ⚠️ `node-version: lts/*` আপনার Next.js ভার্সনের ন্যূনতম Node-এর সাথে মেলে কি `node_modules/next/dist/docs/` বা Next ডকে দেখুন।
- ⚠️ pnpm v11-এ `pnpm-workspace.yaml`-এর `allowBuilds` সেটিং আছে; CI-তে build-script সংক্রান্ত সমস্যা হলে pnpm ডক দেখুন।

## ৩. 🛠️ ধাপে ধাপে
```bash
git switch -c chore/ci-workflow
mkdir -p .github/workflows
# ci.yml বানান
git add .github && git commit -m "ci: add lint and build workflow"
git push -u origin chore/ci-workflow
gh pr create
gh pr checks --watch      # CI-র অবস্থা (ফ্ল্যাগ gh pr checks --help-এ ✅ মেলান)
gh run list
gh run view --log-failed  # ব্যর্থ হলে লগ
```
ইচ্ছাকৃতভাবে একটা lint-error ঢুকিয়ে PR-এ লাল ❌ দেখুন, ঠিক করে সবুজ ✅ করুন।

## ৪. ব্রাঞ্চ প্রোটেকশন / Rulesets (⚠️ UI পথ বদলায়: Settings → Rules → Rulesets, বা Settings → Branches)
সুপারিশকৃত নিয়ম `main`-এর জন্য:
- ✅ Pull request দিয়ে ছাড়া মার্জ নয় (সরাসরি push বন্ধ)
- ✅ Status checks পাস লাগবে (আপনার `verify` জব)
- ✅ ব্রাঞ্চ আপ-টু-ডেট লাগবে (ঐচ্ছিক)
- ✅ Force push ও ব্রাঞ্চ মোছা বন্ধ
- 🔶 Approvals আবশ্যক: **একা কাজ করলে নিজের PR নিজে অ্যাপ্রুভ করা যায় না**, তাই একা হলে 0 রাখুন বা নিজেকে bypass দিন।
📖 https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository

প্রোটেকশন চালুর পর সরাসরি `git push origin main` ব্যর্থ হবে: এটাই উদ্দেশ্য।

## ৫. Secrets ও Dependabot
- Settings → Secrets and variables → Actions-এ সিক্রেট রাখুন; ওয়ার্কফ্লোতে `${{ secrets.NAME }}`। কখনো কোডে নয়।
- Dependabot: `.github/dependabot.yml`
```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: weekly
```
(`package-ecosystem: npm` pnpm লকফাইলও সমর্থন করে কি না ⚠️ ডকে দেখুন।) 📖 docs.github.com/code-security/dependabot

## ✅ চেকপয়েন্ট
- [ ] PR-এ CI সবুজ/লাল দেখেছেন।
- [ ] `main` প্রোটেক্টেড; সরাসরি push আটকায়।
- [ ] CI ব্যর্থ হলে `gh run view --log-failed` দিয়ে কারণ খুঁজেছেন।

## 📖 উৎস
https://docs.github.com/actions · https://github.com/pnpm/action-setup
