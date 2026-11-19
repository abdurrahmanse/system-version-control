# লেসন ০৪: ব্রাঞ্চ ও মার্জ

**লক্ষ্য:** প্রতিটি কাজ আলাদা ব্রাঞ্চে; মার্জের দুই ধরন (fast-forward, merge commit) বোঝা।

## ১. কেন ব্রাঞ্চ
`main` সবসময় কাজ-করা অবস্থায় রাখা। নতুন কাজ আলাদা ব্রাঞ্চে; তৈরি হলে মার্জ।

## ২. কমান্ড
| কমান্ড | কী করে |
|---|---|
| `git branch` / `git branch -vv` | ব্রাঞ্চ তালিকা (upstream সহ) |
| `git switch <b>` | ব্রাঞ্চে যাওয়া |
| `git switch -c <b>` | নতুন ব্রাঞ্চ বানিয়ে যাওয়া |
| `git merge <b>` | `<b>`-কে বর্তমান ব্রাঞ্চে মার্জ |
| `git branch -d <b>` | মার্জ হয়ে গেছে এমন ব্রাঞ্চ মোছা (নিরাপদ) |
| `git branch -D <b>` | জোর করে মোছা ⚠️ (অমার্জড কাজ হারাতে পারে) |

`git switch` ও `git restore` পুরোনো `git checkout`-এর সহজ ভাগ; দুটোই আছে, নতুনদের জন্য `switch` পরিষ্কার।

## ৩. দুই ধরনের মার্জ
**Fast-forward:** `main` এর পর শুধু feature এগিয়েছে → main-এর পয়েন্টার সামনে সরে, নতুন কমিট হয় না।
```
main: A─B        feature: A─B─C─D     →  main: A─B─C─D
```
**Merge commit (three-way):** দুই দিকেই নতুন কমিট → দুই parent-ওয়ালা মার্জ কমিট।
```
main:    A─B─E
          \   \
feature:   C─D─M   (M = merge commit)
```
- `git merge --no-ff <b>`: সবসময় merge commit বানায়, যাতে ব্রাঞ্চের ইতিহাস দৃশ্যমান থাকে (মতামতের বিষয়)।
- `git merge --abort`: মার্জ মাঝপথে থামিয়ে আগের অবস্থায়।

## ৪. ব্রাঞ্চের নামকরণ
`feature/add-task-dialog`, `fix/dialog-focus`, `docs/lesson-04`, `chore/update-deps`। (দলে কনভেনশন একটা ঠিক করুন, এটা নিয়ে ধর্মযুদ্ধ নিষ্প্রয়োজন।)

## ৫. 🛠️ প্রজেক্টে অনুশীলন: "টাস্ক যোগ করার Dialog"
```bash
git switch main
git status                         # clean থাকতে হবে
git switch -c feature/add-task-dialog
```
নতুন একটা প্র্যাকটিস-রুট `app/playground/page.tsx` বানিয়ে তাতে (ডিজাইন নিয়ে ভাববেন না) shadcn-এর `Dialog`, `Input`, `Label`, `Button` দিয়ে একটা "Add task" বাটন যোগ করুন যা ডায়ালগ খুলে একটা ইনপুট দেখায়।
- 📖 কম্পোনেন্ট ব্যবহার: https://ui.shadcn.com/docs/components (Dialog পেজ)। ইনস্টল করা ফাইল `components/ui/dialog.tsx`।
- ডায়ালগের ফর্ম সাবমিটের লজিক পরে (react-hook-form + zod, [PACKAGES.md](../PACKAGES.md))।

২–৩টা কমিটে কাজ করুন:
```bash
pnpm build && pnpm lint
git add app/playground/page.tsx
git commit -m "feat: add add-task dialog skeleton"
```
এবার মার্জ:
```bash
git switch main
git merge feature/add-task-dialog   # fast-forward হওয়ার কথা (কেন? নিজে ব্যাখ্যা করুন)
git log --oneline --graph --all
```
**বোনাস:** আরেকটা ব্রাঞ্চ `docs/readme-note` বানান, `main`-এ আলাদা কমিট করুন, তারপর মার্জ করে একটা *merge commit* তৈরি করুন এবং `--graph`-এ দেখুন।
```bash
git branch -d feature/add-task-dialog
```

## ✅ চেকপয়েন্ট
- [ ] fast-forward ও merge commit কখন হয় ব্যাখ্যা করতে পারেন।
- [ ] `git log --graph`-এ একটা merge commit দেখেছেন।
- [ ] `-d` আর `-D`-এর পার্থক্য জানেন।

## 📖 উৎস
https://git-scm.com/docs/git-switch · https://git-scm.com/docs/git-merge · Pro Git অধ্যায় ৩
