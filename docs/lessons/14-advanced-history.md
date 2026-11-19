# লেসন ১৪: অ্যাডভান্সড ইতিহাস-টুলস

**লক্ষ্য:** বড় প্রজেক্টে বাগ ও ইতিহাস নিয়ে গোয়েন্দাগিরি।

## ১. ইতিহাস খোঁজা
```bash
git log --oneline --graph --decorate --all
git log --author="নাম" --since="2 weeks ago"
git log --grep="dialog"              # বার্তায় খোঁজা
git log -S"useState" -- app/         # কোডে ঐ স্ট্রিং যোগ/মোছা হয়েছে এমন কমিট (pickaxe)
git log -G"regex"                    # regex সহ
git log --follow -p -- app/page.tsx  # একটা ফাইলের ইতিহাস (rename সহ)
git shortlog -sn                     # কে কত কমিট
git show <commit>:path/file          # নির্দিষ্ট কমিটের ফাইল
git diff main...feature              # তিন-ডটে: feature যা মার্জ-বেস থেকে যোগ করেছে
git range-diff                       # rebase-এর আগে/পরের সিরিজ তুলনা
```
## ২. blame: "এই লাইন কে/কেন লিখল"
```bash
git blame -L 10,30 app/page.tsx
git blame -w -C app/page.tsx         # হোয়াইটস্পেস/স্থানান্তর উপেক্ষা
```
blame দোষারোপ নয়, **প্রসঙ্গ** খোঁজার টুল: কমিট বার্তা ও PR-এ ফিরে যান।

## ৩. bisect: কোন কমিটে বাগ ঢুকল (বাইনারি সার্চ)
```bash
git bisect start
git bisect bad                 # বর্তমান কমিটে বাগ আছে
git bisect good <পুরোনো-ভালো-কমিট>
# Git মাঝের কমিটে চেকআউট করে; আপনি পরীক্ষা করে বলেন:
git bisect good    # অথবা
git bisect bad
# শেষে প্রথম খারাপ কমিট দেখায়
git bisect reset               # আগের অবস্থায় ফেরা
```
স্বয়ংক্রিয়: `git bisect run pnpm build` (বা যেকোনো স্ক্রিপ্ট যা exit code 0 = ভালো)।
**🛠️ অনুশীলন:** একটা ব্রাঞ্চে ১০টা ছোট কমিট বানান, ৬ নম্বরে ইচ্ছাকৃত বাগ (যেমন ভাঙা JSX) ঢোকান, bisect দিয়ে বের করুন, তারপর ব্রাঞ্চ মুছুন।

## ৪. worktree: একসাথে একাধিক ব্রাঞ্চ, আলাদা ফোল্ডারে
```bash
git worktree add ../tt-hotfix hotfix/login   # বিদ্যমান ব্রাঞ্চ; নতুন হলে: git worktree add -b hotfix/x ../tt-hotfix
git worktree list
git worktree remove ../tt-hotfix
```
stash/switch ছাড়াই জরুরি ফিক্স; একই `.git` শেয়ার করে। (প্রতিটি worktree-তে `pnpm install` আলাদা লাগতে পারে।)

## ৫. reflog + ডিটাচড HEAD
`git switch --detach <commit>`: যেকোনো পুরোনো কমিট ঘুরে দেখা; ব্রাঞ্চে না ফিরে কমিট করলে হারিয়ে যেতে পারে → দরকার হলে `git switch -c <নাম>`।

## ৬. ইতিহাস মেরামত (অত্যন্ত সতর্কতা ⚠️)
- ফাইল/সিক্রেট পুরো ইতিহাস থেকে মুছতে `git filter-repo` (Git-এর সাথে আসে না, আলাদা টুল: 📖 https://github.com/newren/git-filter-repo)। পুরোনো `git filter-branch` ব্যবহার নিরুৎসাহিত।
- ইতিহাস বদলালে **সব কমিটের হ্যাশ বদলায়** → force push লাগে → সব সহযোগীকে নতুন করে ক্লোন করতে হয়। সিক্রেট ফাঁস হলে **আগে সিক্রেট বাতিল/রোটেট করুন** (লেসন ১৫)।
- স্যান্ডবক্স কপিতে (`git clone --mirror`) আগে চেষ্টা করুন।

## ৭. স্বাক্ষরিত কমিট (Signed commits)
SSH কী দিয়ে স্বাক্ষর (git ≥ 2.34 ⚠️ আপনার ভার্সন 2.55 ✅):
```bash
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub
git config --global commit.gpgsign true
```
GitHub-এ ঐ কী "Signing key" হিসেবেও যোগ করতে হয় (⚠️ UI পথ)। তখন কমিটে "Verified" ব্যাজ। 📖 docs.github.com/authentication/managing-commit-signature-verification

## ৮. বড় রিপো ও সাবমডিউল (সংক্ষেপে)
- `git clone --filter=blob:none <url>` (partial clone), `git sparse-checkout` : বড় মনোরিপোতে দ্রুততা।
- **Git LFS**: বড় বাইনারি ফাইলের জন্য। 
- **Submodule** (`git submodule add/update --init --recursive`): অন্য রিপো ভেতরে ঢোকায়; জটিল, সত্যিই দরকার হলে ব্যবহার করুন। বিকল্প: প্যাকেজ ম্যানেজার/মনোরিপো।

## ✅ চেকপয়েন্ট
- [ ] `git log -S` দিয়ে একটা কোড-পরিবর্তন খুঁজে পেয়েছেন।
- [ ] bisect দিয়ে ইচ্ছাকৃত বাগ-কমিট বের করেছেন।
- [ ] worktree বানিয়ে মুছেছেন।
- [ ] filter-repo-র ঝুঁকি (হ্যাশ বদল + force push) ব্যাখ্যা করতে পারেন।

## 📖 উৎস
https://git-scm.com/docs/git-bisect · https://git-scm.com/docs/git-worktree · https://git-scm.com/docs/git-blame · https://git-scm.com/docs/git-log
