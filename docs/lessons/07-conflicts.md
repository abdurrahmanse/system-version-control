# লেসন ০৭: কনফ্লিক্ট সমাধান

**লক্ষ্য:** কনফ্লিক্টে ভয় না পেয়ে শান্তভাবে সমাধান করা।

## ১. কনফ্লিক্ট কেন হয়
দুই ব্রাঞ্চ **একই ফাইলের একই জায়গা** ভিন্নভাবে বদলালে Git নিজে সিদ্ধান্ত নিতে পারে না, আপনাকে বেছে নিতে বলে। এটা ভুল নয়, স্বাভাবিক ঘটনা।

## ২. কনফ্লিক্ট মার্কার পড়া
```
<<<<<<< HEAD
আপনার বর্তমান ব্রাঞ্চের সংস্করণ
=======
যে ব্রাঞ্চ মার্জ করছেন তার সংস্করণ
>>>>>>> feature/other
```
সমাধান = মার্কারসহ তিনটা লাইন মুছে **চূড়ান্ত সঠিক কোড** রাখা (একটা বা দুটোর মিশ্রণ বা নতুন কিছু)।

## ৩. ধাপগুলো
```bash
git merge <branch>              # CONFLICT (content): Merge conflict in …
git status                      # "both modified" ফাইলগুলো
# ফাইল সম্পাদনা করে মার্কার সরান
pnpm build && pnpm lint         # সমাধানের পরও কোড যে ভাঙেনি যাচাই
git add <file>                  # "সমাধান হয়েছে" জানানো
git commit                      # (ডিফল্ট মার্জ বার্তা ঠিক আছে)
# মাঝপথে সরে আসতে:
git merge --abort
```
- `git diff --name-only --diff-filter=U` শুধু অমীমাংসিত ফাইল দেখায়।
- `git checkout --ours <f>` / `--theirs <f>`: পুরো ফাইলের একপক্ষ নেয়। ⚠️ merge-এ "ours" = আপনার বর্তমান ব্রাঞ্চ, কিন্তু **rebase-এ অর্থ উল্টে যায়**। ব্যবহারের আগে `git help checkout` পড়ুন।
- VS Code-এ "Accept Current / Incoming / Both" বাটন আছে। বুঝে ব্যবহার করুন।
- `rerere` (লেসন ০১-এ চালু করেছেন) একই কনফ্লিক্টের সমাধান মনে রাখে।

## ৪. 🛠️ প্রজেক্টে অনুশীলন: ইচ্ছাকৃত কনফ্লিক্ট
`app/page.tsx`-এর হিরো ব্যাজের লেখা (`badge="Git & GitHub · end to end"`) দুই ব্রাঞ্চে দুইভাবে বদলান।
```bash
git switch main && git pull
git switch -c experiment/badge-secondary
# badge লেখাটা বদলে "Learn Git" করুন, কমিট করুন
git switch main
git switch -c experiment/badge-outline
# একই badge লেখা বদলে "Learn GitHub" করুন, কমিট করুন

git switch experiment/badge-secondary
git merge experiment/badge-outline      # কনফ্লিক্ট!
```
১. মার্কার দেখুন ২. একটা সংস্করণ বাছুন (বা নতুনটা লিখুন) ৩. `add` + `commit` ৪. `git log --graph` দেখুন।
শেষে অনুশীলনের ব্রাঞ্চ ফেলে দিন: `git switch main && git branch -D experiment/badge-secondary experiment/badge-outline` (-D কারণ এগুলো main-এ মার্জ হয়নি; ঠিক কোন ব্রাঞ্চ মুছছেন সেটা `git branch` দিয়ে দেখে নিন)।

## কনফ্লিক্ট কমানোর কৌশল
- ছোট, ঘন ঘন PR। দীর্ঘ-জীবী ব্রাঞ্চ এড়ান।
- নিয়মিত `main` থেকে আপডেট নিন (`git merge main` বা `git rebase main`)।
- বড় ফাইল ভেঙে ছোট কম্পোনেন্টে ভাগ করুন।
- ফরম্যাটার (prettier) একরকম রাখুন, ফরম্যাটিং-কনফ্লিক্ট কমে।

## ✅ চেকপয়েন্ট
- [ ] একটা কনফ্লিক্ট নিজে সমাধান করেছেন।
- [ ] `merge --abort` ব্যবহার করে দেখেছেন।
- [ ] merge ও rebase-এ `ours/theirs`-এর পার্থক্যের সতর্কতা জানেন।

## 📖 উৎস
https://git-scm.com/docs/git-merge#_how_conflicts_are_presented · https://docs.github.com/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts
