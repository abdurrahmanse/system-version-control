# লেসন ০৮: ভুল শোধরানো (Undo)

**লক্ষ্য:** প্রায় সব ভুল Git-এ ফেরত নেওয়া যায়। কোন অবস্থায় কোন টুল, সেটা শেখা।
> ⚠️ এই লেসনের ধ্বংসাত্মক কমান্ড **শুধু স্যান্ডবক্সে** চালান, আপনার আসল প্রজেক্টে নয়।

## ১. স্যান্ডবক্স রিপো বানান
```bash
mkdir ~/git-lab && cd ~/git-lab
git init -b main
echo "one" > a.txt && git add a.txt && git commit -m "feat: add a.txt"
echo "two" >> a.txt && git commit -am "feat: second line"
echo "three" >> a.txt && git commit -am "feat: third line"
git log --oneline
```

## ২. কোন সমস্যায় কী (সিদ্ধান্ত-তালিকা)
| অবস্থা | সমাধান | নিরাপদ? |
|---|---|---|
| ফাইলের এখনো-অকমিটেড পরিবর্তন ফেলে দিতে | `git restore <file>` | ⚠️ পরিবর্তন স্থায়ীভাবে হারায় |
| `git add` ফেরত নিতে | `git restore --staged <file>` | ✅ |
| শেষ কমিটের বার্তা/কন্টেন্ট ঠিক করতে (push-এর **আগে**) | `git commit --amend` | ✅ (ইতিহাস বদলায়) |
| কমিট বাতিল, কাজ রাখতে (staged) | `git reset --soft HEAD~1` | ✅ |
| কমিট বাতিল, কাজ রাখতে (unstaged) | `git reset HEAD~1` (= `--mixed`) | ✅ |
| কমিট বাতিল, কাজও ফেলে দিতে | `git reset --hard HEAD~1` | 🚫 অকমিটেড কাজ হারায় |
| **push হয়ে গেছে** এমন কমিট ফেরাতে | `git revert <commit>` (নতুন উল্টো-কমিট বানায়) | ✅ শেয়ার্ড ইতিহাসে এটাই নিয়ম |
| মার্জ কমিট ফেরাতে | `git revert -m 1 <merge-commit>` | ⚠️ `-m` বুঝে ব্যবহার করুন |
| হারানো কমিট ফিরিয়ে আনতে | `git reflog` → `git reset --hard <হ্যাশ>` বা `git branch rescue <হ্যাশ>` | ✅ |

## ৩. `reset`-এর তিন মোড
| মোড | HEAD/ব্রাঞ্চ | Staging | Working dir |
|---|---|---|---|
| `--soft` | সরে | অক্ষত | অক্ষত |
| `--mixed` (ডিফল্ট) | সরে | রিসেট | অক্ষত |
| `--hard` | সরে | রিসেট | **রিসেট (কাজ হারায়)** |

## ৪. স্যান্ডবক্সে অনুশীলন
```bash
# ক) restore
echo "oops" >> a.txt && git restore a.txt && cat a.txt
# খ) amend
git commit --amend -m "feat: add third line"     # বার্তা বদলাল; হ্যাশও বদলাল
# গ) তিন ধরনের reset, প্রতিবার git status ও git log দেখুন
git reset --soft HEAD~1 ; git status ; git commit -m "feat: third line again"
git reset HEAD~1       ; git status ; git add a.txt ; git commit -m "feat: third line again"
# ঘ) hard reset ও reflog দিয়ে উদ্ধার
git reset --hard HEAD~1 ; git log --oneline
git reflog                       # হারানো কমিটের হ্যাশ খুঁজুন
git reset --hard <হ্যাশ>          # ফিরে এল!
# ঙ) revert
git revert HEAD                  # একটা উল্টো-কমিট
git log --oneline
```

## ৫. `reflog`: আপনার সেফটি-নেট
`git reflog` HEAD-এর **সব** অবস্থান (লোকালে, ডিফল্টে কয়েক সপ্তাহ-মাস) মনে রাখে। ব্রাঞ্চ মুছে বা `reset --hard` করেও কমিট ফেরানো যায়, যতক্ষণ gc না চালানো হয়।
(এই রিপোর পুরোনো ইতিহাস স্থায়ীভাবে মুছতে `reflog expire` + `gc --prune` চালিয়েছিলেন, ঐ কারণে সেগুলো আর ফেরানো যায় না। এটাই "স্থায়ী মুছে ফেলা"র মানে।)

## ৬. সোনালি নিয়ম
1. **push হওয়ার আগে** ইতিহাস বদলানো (amend, reset, rebase) সাধারণত ঠিক।
2. **push হওয়ার পরে** → `revert`। আর কেউ ব্রাঞ্চটা নিয়ে ফেললে ইতিহাস বদলালে তাদের কাজ ভেঙে যায়।
3. ধ্বংসাত্মক কমান্ডের আগে: `git status`, `git log --oneline -5`, প্রয়োজনে ব্যাকআপ ব্রাঞ্চ: `git branch backup/before-reset`।
4. `git clean`: আগে `git clean -nd` (dry-run), তারপর `git clean -fd`।

## ✅ চেকপয়েন্ট
- [ ] `reset --hard` করে `reflog` থেকে উদ্ধার করেছেন।
- [ ] `revert` ও `reset`-এর পার্থক্য (কখন কোনটা) ব্যাখ্যা করতে পারেন।
- [ ] তিন reset মোডের টেবিল না দেখে বলতে পারেন।

## 📖 উৎস
https://git-scm.com/docs/git-reset · https://git-scm.com/docs/git-revert · https://git-scm.com/docs/git-reflog · https://git-scm.com/docs/git-restore
