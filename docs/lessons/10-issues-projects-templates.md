# লেসন ১০: Issues, Projects, টেমপ্লেট, CODEOWNERS

**লক্ষ্য:** কাজ ট্র্যাক করা এবং Issue ↔ PR ↔ কমিট সংযুক্ত রাখা।

## ১. Issues
- প্রতিটি কাজ/বাগ/আইডিয়া = একটা Issue (শিরোনাম, বর্ণনা, লেবেল, অ্যাসাইনি, মাইলস্টোন)।
- PR/কমিটে `Closes #12` / `Fixes #12` / `Resolves #12` লিখলে PR মার্জে ইস্যু স্বয়ংক্রিয় বন্ধ হয় (ডিফল্ট ব্রাঞ্চে মার্জ হলে)। 📖 docs.github.com → "Linking a pull request to an issue"
```bash
gh issue create --title "feat: add done checkbox" --body "…" --label enhancement
gh issue list
gh issue view 1
```

## ২. লেবেল ও মাইলস্টোন
লেবেল: `bug`, `enhancement`, `documentation`, `good first issue` (GitHub-এ ডিফল্ট থাকে ⚠️ যাচাই করুন)। মাইলস্টোন: যেমন `v0.1.0` রিলিজের জন্য গ্রুপ।

## ৩. Issue Forms ও PR টেমপ্লেট (`.github/`)
`.github/pull_request_template.md`:
```markdown
## কী বদলেছে
## কেন
## কীভাবে টেস্ট করেছেন
- [ ] pnpm build
- [ ] pnpm lint
## সম্পর্কিত Issue
Closes #
```
`.github/ISSUE_TEMPLATE/bug_report.yml` (issue form):
```yaml
name: Bug report
description: কিছু ভেঙে গেছে
labels: [bug]
body:
  - type: textarea
    id: what-happened
    attributes:
      label: কী ঘটেছে?
    validations:
      required: true
  - type: textarea
    id: steps
    attributes:
      label: পুনরুৎপাদনের ধাপ
```
📖 https://docs.github.com/communities/using-templates-to-encourage-useful-issues-and-pull-requests (ফর্ম-স্কিমার প্রতিটি ফিল্ড ডকে মিলিয়ে নিন ⚠️)

## ৪. CODEOWNERS
`.github/CODEOWNERS`: কোন ফাইলের জন্য কে অটো-রিভিউয়ার:
```
*                @your-github-username
/app/            @your-github-username
```
(ব্রাঞ্চ-প্রোটেকশনে "Require review from Code Owners" চালু করলে বাধ্যতামূলক হয়, লেসন ১২।)

## ৫. GitHub Projects
Issue/PR-এর বোর্ড (Todo / In progress / Done) বা টেবিল। 📖 docs.github.com/issues/planning-and-tracking-with-projects

## ৬. 🛠️ প্রজেক্টে অনুশীলন
১. ৩টা Issue বানান: "Add done checkbox" (`enhancement`), "Dialog focus bug" (`bug`), "Document lesson notes" (`documentation`)।
২. একটা Project বোর্ড খুলে Issue যোগ করুন।
৩. ব্রাঞ্চ `feature/done-checkbox` → shadcn `Checkbox` যোগ করুন → PR-এ `Closes #<নম্বর>`।
৪. টেমপ্লেট ফাইল (উপরের) একটা `chore/github-templates` ব্রাঞ্চে বানিয়ে PR করুন, তারপর নতুন PR খুলে দেখুন টেমপ্লেট আসে কি না।
৫. মার্জের পর Issue স্বয়ংক্রিয় বন্ধ হয়েছে কি দেখুন।

## ✅ চেকপয়েন্ট
- [ ] Issue → ব্রাঞ্চ → PR → মার্জ → Issue বন্ধ: পুরো চক্র একবার।
- [ ] PR টেমপ্লেট কাজ করছে।
- [ ] CODEOWNERS ফাইল যুক্ত।
