# লেসন ০১: সেটআপ (git config, SSH, gh)

**লক্ষ্য:** Git আপনার পরিচয় জানবে, GitHub-এ নিরাপদে (SSH বা gh) যুক্ত হবে।
**আগে জানতে হবে:** টার্মিনাল ব্যবহার।

## ১. ভার্সন দেখুন
```bash
git --version
gh --version
```
এই কারিকুলাম git 2.55 ও gh 2.98-এ যাচাই করা (✅)। আপনার ভার্সন আলাদা হলে `git help <cmd>` দিয়ে মেলান।

## ২. আপনার পরিচয়
```bash
git config --global user.name "আপনার নাম"
git config --global user.email "আপনার-ইমেইল"
git config --global --list --show-origin   # সব সেটিং ও কোন ফাইল থেকে এসেছে
```
- প্রতিটি কমিটে নাম+ইমেইল লেখা থাকে। GitHub এই ইমেইল দিয়েই কমিটকে আপনার অ্যাকাউন্টের সাথে মেলায়। 
- ইমেইল প্রকাশ করতে না চাইলে GitHub-এর `noreply` ইমেইল ব্যবহার করা যায় (GitHub Settings → Emails, ⚠️ UI-র পথ বদলাতে পারে)।

## ৩. স্তর (scope): গুরুত্বপূর্ণ ধারণা
| ফ্ল্যাগ | কোথায় সংরক্ষিত | কখন |
|---|---|---|
| `--system` | পুরো কম্পিউটার | খুব কম |
| `--global` | আপনার ইউজার (`~/.gitconfig`) | সাধারণত এটা |
| `--local` (ডিফল্ট) | শুধু এই রিপো (`.git/config`) | রিপো-ভিত্তিক ব্যতিক্রম |

## ৪. সুপারিশকৃত সেটিংস (প্রতিটির কারণসহ)
```bash
git config --global init.defaultBranch main     # নতুন রিপোর ব্রাঞ্চ main
git config --global fetch.prune true            # রিমোটে মুছে ফেলা ব্রাঞ্চ লোকালেও পরিষ্কার
git config --global push.autoSetupRemote true   # প্রথম push-এই upstream সেট
git config --global pull.ff only                # pull-এ অনিচ্ছাকৃত merge কমিট না বানানো
git config --global rerere.enabled true         # একই কনফ্লিক্ট দ্বিতীয়বার মনে রাখা
git config --global core.editor "code --wait"   # VS Code ব্যবহারকারীদের জন্য
```
`pull.ff only`, `pull.rebase true` ও ডিফল্ট: এগুলো **মতামতের বিষয়**, সব বৈধ। পরে লেসন ০৫-এ তুলনা করা হবে। না বুঝলে এখন `pull.ff only` রাখুন; এটা নিরাপদ, কারণ কিছু অপ্রত্যাশিত হলে pull ব্যর্থ হয়ে জানায়।

## ৫. SSH কী (পাসওয়ার্ড ছাড়া নিরাপদ push)
```bash
ssh-keygen -t ed25519 -C "আপনার-ইমেইল"     # পাসফ্রেজ দিন
ls ~/.ssh                                      # id_ed25519 (প্রাইভেট), id_ed25519.pub (পাবলিক)
cat ~/.ssh/id_ed25519.pub                      # শুধু .pub কপি করুন
```
- 🚫 **প্রাইভেট কী (`id_ed25519`) কখনো কাউকে/কোথাও পেস্ট করবেন না**, AI-কেও না।
- GitHub-এ যোগ: Settings → SSH and GPG keys → New SSH key (⚠️ UI পথ), অথবা `gh ssh-key add ~/.ssh/id_ed25519.pub`।
```bash
ssh -T git@github.com    # সফল হলে: "Hi <username>! You've successfully authenticated…"
```

## ৬. GitHub CLI (`gh`)
```bash
gh auth login      # প্রশ্নের উত্তর দিন; ব্রাউজারে অনুমতি
gh auth status
```
`gh` দিয়ে টার্মিনাল থেকেই PR, Issue, রিলিজ, Actions দেখা যায়: পরের লেসনগুলোতে ব্যবহার হবে।

## ৭. HTTPS বনাম SSH রিমোট
```bash
git remote -v
git remote set-url origin git@github.com:<username>/<repo>.git   # SSH-এ বদলাতে
```
দুটোই বৈধ। HTTPS-এ gh/credential helper টোকেন সামলায়; SSH-এ কী। আপনার সুবিধামতো একটা বাছুন।

## ✅ চেকপয়েন্ট
- [ ] `git config --global user.name` ও `user.email` সঠিক ফল দেয়।
- [ ] `gh auth status` লগড-ইন দেখায়।
- [ ] (SSH বেছে থাকলে) `ssh -T git@github.com` সফল।
- [ ] GitHub অ্যাকাউন্টে 2FA চালু (Settings → Password and authentication ⚠️)।

## 📖 উৎস
- git config: https://git-scm.com/docs/git-config
- GitHub SSH: https://docs.github.com/authentication/connecting-to-github-with-ssh
- gh auth login: https://cli.github.com/manual/gh_auth_login
