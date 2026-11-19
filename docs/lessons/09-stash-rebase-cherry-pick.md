# লেসন ০৯: stash, rebase, cherry-pick

**লক্ষ্য:** ইতিহাস পরিচ্ছন্ন রাখার প্রো-টুলস।
**আগে:** লেসন ০৮ (reflog আপনার সেফটি-নেট)।

## ১. stash: অসমাপ্ত কাজ সরিয়ে রাখা
```bash
git stash push -m "wip: dropdown"    # tracked পরিবর্তন সরায় (-u নতুন untracked ফাইলসহ)
git stash list
git stash pop                        # ফেরত আনে + তালিকা থেকে মোছে
git stash apply                      # ফেরত আনে, তালিকায় রাখে
git stash drop stash@{0}
```
কখন: কাজের মাঝে জরুরি বাগ ফিক্সে ব্রাঞ্চ বদলাতে হলে।

## ২. rebase: ব্রাঞ্চের ভিত্তি সরানো
```
আগে:   main: A─B─E        feature: A─B─C─D
পরে:   git switch feature && git rebase main  →  A─B─E─C'─D'   (C', D' নতুন কমিট/নতুন হ্যাশ)
```
- ফল: রৈখিক ইতিহাস, merge commit নেই।
- 🚫 **সোনালি নিয়ম: যে কমিট অন্যরা ইতিমধ্যে পেয়েছে (শেয়ার্ড ব্রাঞ্চে) তা rebase করবেন না।** নিজের ব্যক্তিগত ফিচার ব্রাঞ্চে ঠিক আছে।
- কনফ্লিক্ট হলে: সমাধান → `git add` → `git rebase --continue`; ছাড়তে `git rebase --abort`।
- rebase-এর পর ইতিমধ্যে push করা ব্রাঞ্চে `git push --force-with-lease` লাগে। `--force` নয়, কেন? `--force-with-lease` রিমোটে অন্য কেউ নতুন কিছু রাখলে আটকে দেয়।

**merge বনাম rebase (নিরপেক্ষ তুলনা):** merge ইতিহাস যেমন ঘটেছে তেমন রাখে (সত্যনিষ্ঠ, কিন্তু জটিল গ্রাফ)। rebase সুন্দর রৈখিক গল্প বানায় (ইতিহাস "ভাষান্তর" হয়, শেয়ার্ডে ঝুঁকিপূর্ণ)। টিমের কনভেনশনই নির্ধারক।

## ৩. ইন্টারঅ্যাকটিভ rebase: কমিট গোছানো
```bash
git rebase -i HEAD~4        # শেষ ৪ কমিট সম্পাদনা
```
এডিটরে প্রতিটি লাইনের শুরুতে কমান্ড:
| কমান্ড | কাজ |
|---|---|
| `pick` | যেমন আছে রাখো |
| `reword` | বার্তা বদলাও |
| `squash` | আগের কমিটে মিশাও (বার্তা একত্র) |
| `fixup` | আগের কমিটে মিশাও (এই বার্তা ফেলে) |
| `drop` | কমিট বাদ |
(ক্রম বদলালে কমিটের ক্রমও বদলায়।) ভুল হলে `git rebase --abort` বা `reflog`।
টিপ: `git commit --fixup <hash>` + `git rebase -i --autosquash <base>`।

## ৪. cherry-pick: নির্দিষ্ট কমিট তুলে আনা
```bash
git cherry-pick <commit>          # বর্তমান ব্রাঞ্চে ঐ কমিটের কপি (নতুন হ্যাশ)
git cherry-pick --abort
```
কখন: হটফিক্স অন্য ব্রাঞ্চেও লাগলে। অতি-ব্যবহারে ইতিহাসে ডুপ্লিকেট কমিট হয়।

## ৫. 🛠️ প্রজেক্টে অনুশীলন: "Action মেনু" ফিচার (DropdownMenu + Tooltip)
```bash
git switch main && git pull
git switch -c feature/task-actions-menu
```
১. shadcn `DropdownMenu` দিয়ে "Edit / Delete" মেনু যোগ করুন → কমিট `wip: menu`
২. `Tooltip` যোগ (⚠️ `components/ui/tooltip.tsx` ডক অনুযায়ী `TooltipProvider` লাগে; ডক পড়ুন) → কমিট `wip: tooltip`
৩. ছোট ফিক্স → কমিট `wip: fix`
৪. `git rebase -i main`: তিন কমিট `squash`/`reword` করে একটা পরিষ্কার `feat: add task actions menu` বানান।
৫. এর মধ্যে অন্য ব্রাঞ্চ থেকে `main` এগিয়ে গেলে `git rebase main`।
৬. `git push -u origin feature/task-actions-menu` → PR (লেসন ০৬)।
৭. মাঝপথে একটা `git stash push -m ...` / `pop` অনুশীলন করুন।

## ✅ চেকপয়েন্ট
- [ ] `squash`/`fixup`/`reword` ব্যবহার করে কমিট গুছিয়েছেন।
- [ ] rebase-এর সোনালি নিয়ম ও `--force-with-lease`-এর কারণ ব্যাখ্যা করতে পারেন।
- [ ] stash push/pop করেছেন।

## 📖 উৎস
https://git-scm.com/docs/git-rebase · https://git-scm.com/docs/git-stash · https://git-scm.com/docs/git-cherry-pick
