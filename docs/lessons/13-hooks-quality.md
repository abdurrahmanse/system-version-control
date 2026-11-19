# লেসন ১৩: Git hooks: husky, lint-staged, commitlint

> **এই রিপোতে আগে থেকেই কনফিগার করা:** `.husky/pre-commit` (lint-staged), `.husky/commit-msg` (commitlint), `.husky/pre-push` (architecture + tests)। ফাইলগুলো পড়ুন; একটা খারাপ কমিট বার্তা দিয়ে হুক পরীক্ষা করুন; তারপর নিজের নিয়ম যোগ করে PR করুন।


**লক্ষ্য:** কমিটের আগেই স্বয়ংক্রিয়ভাবে ভুল ধরা: খারাপ কোড বা খারাপ বার্তা কমিটই হবে না।
**আগে:** লেসন ০৩ (Conventional Commits), ১২ (CI)। প্যাকেজগুলো ইনস্টল করা আছে, কনফিগ বাকি।

## ১. Git hook কী
`.git/hooks/`-এ স্ক্রিপ্ট; কমিট/পুশের নির্দিষ্ট মুহূর্তে চলে (`pre-commit`, `commit-msg`, `pre-push`…)। স্ক্রিপ্ট ব্যর্থ হলে কমিট আটকে যায়। `.git` ভার্সন-কন্ট্রোলে যায় না, তাই husky হুকগুলো `.husky/`-তে রেখে টিমের সবার সাথে শেয়ার করে।
📖 https://git-scm.com/docs/githooks

## ২. তিনটি টুল, তিন কাজ
| টুল | কাজ |
|---|---|
| **husky** | হুক ইনস্টল/ম্যানেজ |
| **lint-staged** | শুধু **stage করা** ফাইলে লিন্ট/ফরম্যাট (দ্রুত) |
| **commitlint** | কমিট বার্তা Conventional Commits কি না যাচাই |

## ৩. ধাপে ধাপে (ব্রাঞ্চ: `chore/git-hooks`)
**ক. Prettier**
`.prettierrc`:
```json
{ "semi": true, "plugins": ["prettier-plugin-tailwindcss"] }
```
**খ. husky** (✅ `husky init` যাচাইকৃত: `prepare` স্ক্রিপ্ট যোগ করে ও `.husky/pre-commit` বানায়, সেখানে ডিফল্ট `pnpm test`, যা আপনার প্রজেক্টে নেই, তাই বদলাতে হবে)
```bash
pnpm exec husky init
```
`.husky/pre-commit` এর বিষয়বস্তু বদলে:
```sh
pnpm exec lint-staged
```
**গ. lint-staged:** `package.json`-এ
```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": ["prettier --write"]
}
```
**ঘ. commitlint** (✅ `@commitlint/config-conventional` দিয়ে যাচাইকৃত: "bad message" ব্যর্থ, "feat: add task dialog" পাস)
`commitlint.config.mjs`:
```js
export default { extends: ["@commitlint/config-conventional"] };
```
`.husky/commit-msg`:
```sh
pnpm exec commitlint --edit "$1"
```
**ঙ. পরীক্ষা**
```bash
git commit --allow-empty -m "bad message"        # ব্যর্থ হওয়া উচিত
git commit --allow-empty -m "chore: add git hooks"   # পাস
```
⚠️ আপনার ভার্সনে ফাইল-ফরম্যাট/কনফিগ-নাম বদলে থাকতে পারে (এই প্যাকেজগুলোর মেজর ভার্সন নতুন): না মিললে অফিশিয়াল ডক: typicode.github.io/husky · github.com/lint-staged/lint-staged · commitlint.js.org

## ৪. নিয়ম
- 🚫 হুক ব্যর্থ হলে `--no-verify` দিয়ে এড়াবেন না; কারণ সারান। (CI আবার ধরবে।)
- হুক দ্রুত রাখুন (শুধু staged ফাইল)। ভারী কাজ (build, test) CI-তে।
- `pre-push`-এ `pnpm build` রাখা মতামতের বিষয়: নিরাপদ কিন্তু ধীর।

## ✅ চেকপয়েন্ট
- [ ] খারাপ বার্তায় কমিট আটকায়।
- [ ] ইচ্ছাকৃত lint-ভুল স্টেজ করলে আটকায় বা ঠিক করে দেয়।
- [ ] `prepare` স্ক্রিপ্ট আছে (ক্লোনের পর `pnpm install` চালালেই হুক সক্রিয়)।
