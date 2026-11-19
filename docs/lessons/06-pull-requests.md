# লেসন ০৬: Pull Request ও কোড রিভিউ

**লক্ষ্য:** প্রতিটি পরিবর্তন PR-এর মাধ্যমে `main`-এ আনা: একা কাজ করলেও।

## ১. PR কী
"আমার ব্রাঞ্চের কাজ `main`-এ মার্জ করার অনুরোধ": আলোচনা, রিভিউ, CI চেক সব এক জায়গায়। PR Git-এর ফিচার নয়, **GitHub-এর ফিচার**।

## ২. ভালো PR-এর বৈশিষ্ট্য
- ছোট (এক উদ্দেশ্য)। সহজে রিভিউযোগ্য।
- শিরোনাম Conventional Commit-এর মতো।
- বর্ণনা: **কী বদলেছে → কেন → কীভাবে টেস্ট করা হয়েছে → স্ক্রিনশট (UI হলে) → সম্পর্কিত Issue** (`Closes #12`)।
- Draft PR: কাজ চলছে, এখনো রিভিউয়ের জন্য প্রস্তুত নয়।

## ৩. gh দিয়ে PR (UI-ও ঠিক আছে)
```bash
git push -u origin <ব্রাঞ্চ>
gh pr create --title "feat: add task filter" --body "…"   # বা শুধু gh pr create (ইন্টারঅ্যাকটিভ)
gh pr status
gh pr view --web
gh pr checks
gh pr diff
```
`gh pr create --help` দিয়ে ফ্ল্যাগ মিলিয়ে নিন ✅।

## ৪. তিন ধরনের মার্জ (GitHub PR-এ): মতামতের বিষয়
| ধরন | ফল | কখন ভালো | অসুবিধা |
|---|---|---|---|
| Merge commit | সব কমিট + একটা merge commit | পুরো ইতিহাস রাখতে চাইলে | ইতিহাস জটিল হতে পারে |
| Squash and merge | পুরো PR = ১ কমিট | PR-এ "wip" কমিট বেশি; পরিষ্কার `main` | ব্যক্তিগত কমিট ইতিহাস হারায় |
| Rebase and merge | কমিটগুলো `main`-এর মাথায় রৈখিকভাবে বসে | রৈখিক ইতিহাস + প্রতি-কমিট ইতিহাস | নতুন হ্যাশ; rebase বোঝা দরকার |

Repo সেটিংসে এর কোনগুলো অনুমোদিত তা বাছা যায় (⚠️ Settings → General → Pull Requests)।

## ৫. রিভিউ
- Reviewer: Comment / Approve / Request changes। লাইন-ভিত্তিক মন্তব্য, `suggestion` ব্লক।
- একা থাকলে নিজের PR নিজে **সাবধানে রিভিউ** করুন (Files changed ট্যাব পড়ুন): অভ্যাস তৈরি হয়।
- AI রিভিউ ব্যবহার করলে তার মন্তব্য যাচাই করে নিন, অন্ধভাবে মানবেন না।

## ৬. 🛠️ প্রজেক্টে অনুশীলন: "Select দিয়ে ফিল্টার"
1. `git switch main && git pull && git switch -c feature/task-filter`
2. shadcn `Select` দিয়ে "All / Todo / Done" ফিল্টার ড্রপডাউন যোগ করুন (UI-ই যথেষ্ট; কার্যকর ফিল্টার লজিক ঐচ্ছিক)।
3. `pnpm build && pnpm lint` → কমিট → `git push -u origin feature/task-filter`
4. `gh pr create` দিয়ে PR খুলুন; বর্ণনায় উপরের ৪ অংশ লিখুন।
5. **Files changed** ট্যাবে নিজের কোডে অন্তত ১টা মন্তব্য করুন।
6. **Squash and merge** করুন। তারপর:
   ```bash
   git switch main && git pull
   git branch -d feature/task-filter
   git push origin --delete feature/task-filter   # রিমোট ব্রাঞ্চ পরিষ্কার (GitHub-এ "Delete branch" বাটনও আছে)
   ```
7. `git log --oneline --graph` এ squash-এর ফল দেখুন।

## ✅ চেকপয়েন্ট
- [ ] একটা PR খুলে মার্জ করেছেন।
- [ ] তিন মার্জ-ধরনের পার্থক্য ও ট্রেড-অফ বলতে পারেন।
- [ ] মার্জের পর লোকাল `main` আপডেট ও পুরোনো ব্রাঞ্চ পরিষ্কার করেছেন।

## 📖 উৎস
https://docs.github.com/pull-requests · https://cli.github.com/manual/gh_pr_create
