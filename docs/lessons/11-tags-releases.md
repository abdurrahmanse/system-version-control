# লেসন ১১: ট্যাগ, রিলিজ, SemVer, Changesets

**লক্ষ্য:** সফটওয়্যারের সংস্করণ চিহ্নিত ও প্রকাশ করা।

## ১. Semantic Versioning (SemVer): MAJOR.MINOR.PATCH
- `PATCH` (0.1.**1**): পিছনের-সামঞ্জস্যপূর্ণ বাগ ফিক্স
- `MINOR` (0.**2**.0): পিছনের-সামঞ্জস্যপূর্ণ নতুন ফিচার
- `MAJOR` (**1**.0.0): ভাঙার মতো পরিবর্তন (breaking)
- `0.y.z`: প্রাথমিক পর্যায়, যেকোনো সময় বদলাতে পারে।
📖 https://semver.org

## ২. Git ট্যাগ
```bash
git tag                               # তালিকা
git tag -a v0.1.0 -m "First release"  # annotated ট্যাগ (সুপারিশ: মেটাডেটা থাকে)
git show v0.1.0
git push origin v0.1.0                # ট্যাগ আলাদাভাবে push লাগে (বা --tags)
git tag -d v0.1.0                     # লোকালে মোছা
git push origin --delete v0.1.0       # রিমোট থেকে মোছা ⚠️ প্রকাশিত ট্যাগ মোছা এড়ান
```
Lightweight ট্যাগ (`git tag v0.1.0`) শুধু নাম; annotated ট্যাগ লেখক/তারিখ/বার্তা রাখে।

## ৩. GitHub Release
```bash
gh release create v0.1.0 --generate-notes --title "v0.1.0"
gh release list
```
`--generate-notes`: মার্জ হওয়া PR থেকে স্বয়ংক্রিয় রিলিজ নোট (flags `gh release create --help`-এ মেলান ✅)।

## ৪. Changesets: ভার্সন ও CHANGELOG স্বয়ংক্রিয় (ইনস্টল করা আছে)
```bash
pnpm exec changeset init          # .changeset/ ফোল্ডার ও কনফিগ
pnpm exec changeset               # কী বদলেছে/কোন বাম্প (patch/minor/major) বেছে একটা ফাইল
pnpm exec changeset version       # ফাইলগুলো থেকে package.json ভার্সন + CHANGELOG.md আপডেট
```
⚠️ আপনার প্যাকেজ `"private": true`। private প্যাকেজে ভার্সনিং/CHANGELOG কীভাবে কাজ করে তা Changesets ডকে (`privatePackages` অপশন) যাচাই করুন: 📖 https://github.com/changesets/changesets
বিকল্প: হাতে `CHANGELOG.md` (keepachangelog.com)।

## ৫. 🛠️ প্রজেক্টে অনুশীলন
১. `main` ঠিকঠাক ও CI পাস থাকলে (লেসন ১২-এর পর আরও ভালো) ট্যাগ `v0.1.0` বানান।
২. `gh release create`।
৩. `chore/changesets` ব্রাঞ্চে `changeset init` ও একটা changeset বানান → PR।
৪. পরের ছোট ফিচারের পর `v0.2.0` রিলিজ করুন এবং `git log v0.1.0..v0.2.0 --oneline` দিয়ে পার্থক্য দেখুন।

## ✅ চেকপয়েন্ট
- [ ] annotated ট্যাগ push করেছেন, GitHub-এ রিলিজ দেখছেন।
- [ ] SemVer-এ কোন পরিবর্তন কোন নম্বর বাড়ায় বলতে পারেন।
