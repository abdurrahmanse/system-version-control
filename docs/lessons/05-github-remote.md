# লেসন ০৫: GitHub রিমোট (push / pull / fetch / clone)

**লক্ষ্য:** লোকাল ও GitHub-এর মধ্যে কাজ সিঙ্ক করা; `fetch` বনাম `pull` পরিষ্কার বোঝা।

## ১. কমান্ড
| কমান্ড | কী করে |
|---|---|
| `git remote -v` | রিমোটের তালিকা |
| `git clone <url>` | রিমোট রিপো কপি করে আনা |
| `git fetch` | রিমোট থেকে নতুন কমিট **আনে, আপনার ব্রাঞ্চ বদলায় না** (`origin/*` হালনাগাদ) |
| `git pull` | `fetch` + (merge বা rebase) |
| `git push` | আপনার কমিট রিমোটে পাঠায় |
| `git push -u origin <b>` | প্রথমবার + upstream সেট (লেসন ০১-এর `push.autoSetupRemote` থাকলে `git push` যথেষ্ট) |

## ২. fetch বনাম pull: নিরাপদ অভ্যাস
```bash
git fetch
git log --oneline main..origin/main    # রিমোটে কী নতুন আছে (আপনার নেই)
git diff main origin/main
git merge origin/main   # বা: git pull
```
আগে `fetch` করে **দেখে** তারপর একীভূত করা সবচেয়ে নিরাপদ।

## ৩. pull-এর তিন আচরণ (মতামতের বিষয়, সব বৈধ)
| সেটিং | ফল | সুবিধা | অসুবিধা |
|---|---|---|---|
| `pull.ff only` | শুধু fast-forward সম্ভব হলে, নইলে থামে | অপ্রত্যাশিত কিছু ঘটে না | divergence হলে নিজে সিদ্ধান্ত নিতে হয় |
| `pull.rebase true` | আপনার কমিট রিমোটের ওপর rebase | রৈখিক ইতিহাস | rebase বোঝা দরকার (লেসন ০৯) |
| `pull.rebase false` | merge commit | সহজ, ইতিহাস অক্ষত | ঘন ঘন "Merge branch..." কমিট |

## ৪. রিমোটে পাঠানো
আপনার রিপোতে `origin` ইতিমধ্যে সেট আছে (`git remote -v` দেখুন)।
```bash
git push                      # main
git status -sb                # main...origin/main দেখুন; ahead/behind সংখ্যা
```

## ৫. 🛠️ প্রজেক্টে অনুশীলন
1. `git switch -c feature/add-task-dialog` করুন (লেসন ০৪ এ আপনি ইতিমধ্যে মার্জ করে থাকলে নতুন ব্রাঞ্চ `feature/task-input-validation-ui`) এবং একটা কমিট দিন।
2. `git push` (অথবা প্রথমবার `git push -u origin <ব্রাঞ্চ>`)।
3. GitHub-এ ব্রাঞ্চটা ব্রাউজারে দেখুন।
4. **দুই-ক্লোন সিমুলেশন:** (সিঙ্ক বোঝার সেরা উপায়)
   ```bash
   cd .. && git clone <আপনার-রিপোর-url> clone-b && cd clone-b
   # clone-b এ একটা কমিট করে push করুন
   cd ../system-version-control
   git fetch && git status -sb     # behind 1 দেখাবে
   git pull
   ```
   (পরে `clone-b` মুছে দিন: `rm -rf ../clone-b`, প্রথমে `ls ../clone-b` দিয়ে সঠিক ফোল্ডার নিশ্চিত করুন।)

## ⚠️ সাধারণ ভুল
- push rejected (`non-fast-forward`): রিমোটে নতুন কমিট আছে। `git fetch` → ইতিহাস দেখুন → merge/rebase। **`--force` দিয়ে সমাধান নয়** (পরে লেসন ০৮, ১৫)।
- ভুল ব্রাঞ্চে কমিট: লেসন ০৮।

## ✅ চেকপয়েন্ট
- [ ] `fetch` ও `pull`-এর পার্থক্য ব্যাখ্যা করতে পারেন।
- [ ] `ahead`/`behind` মানে জানেন, `git status -sb`-এ দেখেছেন।
- [ ] দ্বিতীয় ক্লোন থেকে পাঠানো কমিট নিজের রিপোতে এনেছেন।

## 📖 উৎস
https://git-scm.com/docs/git-fetch · https://git-scm.com/docs/git-pull · https://git-scm.com/docs/git-push
