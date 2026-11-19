# লেসন ০৩: প্রথম কমিটসমূহ

**লক্ষ্য:** পরিবর্তন দেখা, বেছে stage করা, অর্থপূর্ণ কমিট লেখা, `.gitignore` বোঝা।
**আগে:** লেসন ০১–০২।

## ১. মূল কমান্ড
| কমান্ড | কী করে |
|---|---|
| `git status` (`-s` সংক্ষিপ্ত) | কোন ফাইল কোন এলাকায় |
| `git diff` | working ↔ staging পার্থক্য (এখনো stage হয়নি যা) |
| `git diff --staged` | staging ↔ শেষ কমিট (পরের কমিটে যা যাবে) |
| `git add <path>` | ফাইল stage |
| `git add -p` | **টুকরো টুকরো (hunk) বেছে** stage: প্রো অভ্যাস |
| `git commit -m "বার্তা"` | কমিট |
| `git log --oneline --graph --all` | ইতিহাস |
| `git show <commit>` | একটা কমিটের বিস্তারিত |

## ২. ভালো কমিট বার্তা: Conventional Commits
ফরম্যাট: `<type>(<scope>): <সংক্ষিপ্ত বিবরণ>`

| type | কখন |
|---|---|
| `feat` | নতুন ফিচার |
| `fix` | বাগ ফিক্স |
| `docs` | ডকুমেন্টেশন |
| `refactor` | আচরণ না বদলে কোড গোছানো |
| `test` | টেস্ট |
| `chore` | টুলিং/ডিপেন্ডেন্সি |
| `ci` | CI কনফিগ |

নিয়ম: বর্তমান কাল ("add", "added" নয়), ~৭২ অক্ষরের মধ্যে, **কেন** করা হলো দরকার হলে বডিতে লিখুন। একটা কমিট = একটা যুক্তিসংগত পরিবর্তন।
📖 https://www.conventionalcommits.org/ (পরে লেসন ১৩-তে commitlint দিয়ে এটা স্বয়ংক্রিয়ভাবে জোর করা হবে।)

## ৩. `.gitignore`
- যা ট্র্যাক করা উচিত নয়: `node_modules/`, `.next/`, `.env*`, `.DS_Store`।
- আপনার `.gitignore` ইতিমধ্যে Next.js-এর জন্য ঠিক আছে। দেখুন: `cat .gitignore`।
- ⚠️ ফাইল আগেই ট্র্যাক হয়ে গেলে `.gitignore` কাজ করে না; `git rm --cached <file>` লাগে।
- `.env.example` কমিট করা ভালো, `.env` কখনো না (লেসন ১৫)।

## ৪. 🛠️ প্রজেক্টে অনুশীলন
আপনার কাজের ডিরেক্টরিতে এখন কিছু অকমিটেড পরিবর্তন আছে (shadcn/ui সেটআপ, ডিপেন্ডেন্সি, সাইটের পেজ ও কম্পোনেন্ট)।

**ধাপ ক: দেখুন**
```bash
git status
git diff --stat
git diff app/page.tsx components/site/hero.tsx
```
**ধাপ খ: ৩টা আলাদা কমিটে ভাগ করুন** (একটা বিশাল "সব" কমিট নয়!)
1. shadcn সেটআপ: `components.json`, `components/`, `lib/`, `app/globals.css`
2. ডিপেন্ডেন্সি: `package.json`, `pnpm-lock.yaml`
3. সাইট (পেজ ও ডিজাইন): `app/`, `components/site/`, `lib/lessons.ts`

> সমস্যা: `package.json` ও `pnpm-lock.yaml`-এ shadcn-এর ও অন্য প্যাকেজের পরিবর্তন মিশে আছে। এটা বাস্তব জীবনের সাধারণ সমস্যা। `git add -p package.json` দিয়ে hunk-ভিত্তিক বেছে নিন। (না পারলে একসাথে এক কমিটে দিন এবং কারণ বার্তায় লিখুন। এটাও বৈধ সিদ্ধান্ত।)

```bash
git add components.json components lib app/globals.css
git diff --staged --stat        # ঠিক কী যাচ্ছে মিলিয়ে নিন
git commit -m "chore: set up shadcn/ui with radix components"

git add app components/site lib/lessons.ts
git commit -m "feat: add version-control learning site"

git add package.json pnpm-lock.yaml
git commit -m "chore: add project dependencies"

git log --oneline --graph --all
```
কমিট করার আগে সবসময়: `pnpm build` ও `pnpm lint`।

**ধাপ গ: বার্তা ভুল হলে** (শুধু শেষ কমিট, এখনো push হয়নি): `git commit --amend` (বিস্তারিত লেসন ০৮)।

## ⚠️ সাধারণ ভুল
- `git add .` অন্ধভাবে: আগে `git status` দেখুন, সিক্রেট/বড় ফাইল ঢুকে যেতে পারে।
- অর্থহীন বার্তা: "update", "fix", "asdf"।
- একটা কমিটে অনেক অসম্পর্কিত পরিবর্তন।

## ✅ চেকপয়েন্ট
- [ ] `git log --oneline` এ আপনার ৩টা অর্থপূর্ণ কমিট।
- [ ] `git status` clean (`nothing to commit`)।
- [ ] `git diff` (খালি) আর `git diff --staged` (খালি) এর মানে ব্যাখ্যা করতে পারেন।
- [ ] `git add -p` অন্তত একবার ব্যবহার করেছেন।

## 📖 উৎস
https://git-scm.com/docs/git-add · https://git-scm.com/docs/git-commit · https://git-scm.com/docs/git-diff
