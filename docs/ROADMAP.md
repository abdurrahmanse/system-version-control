# রোডম্যাপ: Version Control (Git + GitHub), জিরো থেকে Pro Max

এই ফাইলটাই **পুরো শেখার পথের মূল মানচিত্র**। ওয়েবসাইটের `/roadmap` পেজ একই তথ্য দেখায় (ডেটা: [lib/lessons.ts](../lib/lessons.ts))। কোনোটা বদলালে দুটোই মিলিয়ে রাখুন।

> সময়ের হিসাব **আনুমানিক**, আপনার গতির ওপর নির্ভর করবে। এগুলো পরিমাপ করা নয়।

## পথের সারসংক্ষেপ

```
 I Beginner ──▶ II Intermediate ──▶ III Advanced ──▶ IV Pro Max
 (০১–০৪)         (০৫–০৮)              (০৯–১২)          (১৩–১৫)
 Git বোঝা        GitHub ও টিমওয়ার্ক   প্রো ওয়ার্কফ্লো    অটোমেশন, ফরেনসিক, নিরাপত্তা
```

| লেভেল | লেসন | আপনি যা পারবেন | আনুমানিক সময় |
|---|---|---|---|
| **I Beginner** | ০১–০৪ | Git সেটআপ, কমিট, ব্রাঞ্চ, মার্জ নিজে করতে | ৪–৮ ঘণ্টা |
| **II Intermediate** | ০৫–০৮ | GitHub-এ push/pull, PR, কনফ্লিক্ট, ভুল ফেরানো | ৬–১০ ঘণ্টা |
| **III Advanced** | ০৯–১২ | rebase, Issues, রিলিজ, CI, ব্রাঞ্চ প্রোটেকশন | ৮–১২ ঘণ্টা |
| **IV Pro Max** | ১৩–১৫ | hooks, bisect, worktree, সিক্রেট-ফাঁস সামলানো, ফর্ক ওয়ার্কফ্লো | ৮–১২ ঘণ্টা |

## পূর্বশর্ত (শুরুর আগে)
- টার্মিনালের প্রাথমিক ব্যবহার (`cd`, `ls`, ফাইল তৈরি)
- একটা GitHub অ্যাকাউন্ট
- Node.js ও pnpm ইনস্টল (প্রজেক্ট চালাতে)

## লেসন-ভিত্তিক মানচিত্র

### I. Beginner: Git বোঝা
| # | লেসন | মূল দক্ষতা | প্রজেক্ট টাস্ক | ফাইল |
|---|---|---|---|---|
| ০১ | Setup | `git config`, SSH, `gh auth` | পরিচয় ও SSH যাচাই | [01](lessons/01-setup.md) |
| ০২ | মানসিক মডেল | তিন এলাকা, কমিট = স্ন্যাপশট, ব্রাঞ্চ = পয়েন্টার | নিজের রিপো পরীক্ষা (`cat-file`) | [02](lessons/02-mental-model.md) |
| ০৩ | প্রথম কমিট | `add -p`, `diff`, Conventional Commits, `.gitignore` | shadcn সেটআপ ৩ কমিটে ভাগ | [03](lessons/03-first-commits.md) |
| ০৪ | ব্রাঞ্চ ও মার্জ | `switch -c`, fast-forward বনাম merge commit | add-task Dialog | [04](lessons/04-branches-merge.md) |

**লেভেল-পাস মানদণ্ড:** `git log --graph`-এ আপনার একটা merge commit আছে এবং তিন এলাকার ছবি না দেখে আঁকতে পারেন।

### II. Intermediate: GitHub ও টিমওয়ার্ক
| # | লেসন | মূল দক্ষতা | প্রজেক্ট টাস্ক | ফাইল |
|---|---|---|---|---|
| ০৫ | GitHub রিমোট | `fetch` বনাম `pull`, upstream, ahead/behind | দুই-ক্লোন সিঙ্ক | [05](lessons/05-github-remote.md) |
| ০৬ | Pull Request | PR লেখা, রিভিউ, তিন মার্জ ধরন | Select ফিল্টার PR | [06](lessons/06-pull-requests.md) |
| ০৭ | কনফ্লিক্ট | মার্কার পড়া, `merge --abort`, `rerere` | ইচ্ছাকৃত কনফ্লিক্ট | [07](lessons/07-conflicts.md) |
| ০৮ | Undo | `restore`, `reset`, `revert`, `reflog` | স্যান্ডবক্সে ভাঙা ও উদ্ধার | [08](lessons/08-undo.md) |

**লেভেল-পাস মানদণ্ড:** একটা PR মার্জ করেছেন; একটা কনফ্লিক্ট ও একটা `reset --hard` থেকে `reflog` দিয়ে উদ্ধার নিজে করেছেন।

### III. Advanced: প্রো ওয়ার্কফ্লো
| # | লেসন | মূল দক্ষতা | প্রজেক্ট টাস্ক | ফাইল |
|---|---|---|---|---|
| ০৯ | stash / rebase / cherry-pick | ইতিহাস গোছানো, `rebase -i` | ৩ wip কমিট → ১ পরিষ্কার কমিট | [09](lessons/09-stash-rebase-cherry-pick.md) |
| ১০ | Issues, Projects | `Closes #n`, টেমপ্লেট, CODEOWNERS | Issue → PR → মার্জ → অটো-ক্লোজ | [10](lessons/10-issues-projects-templates.md) |
| ১১ | ট্যাগ ও রিলিজ | SemVer, annotated tag, Changesets | `v0.1.0` রিলিজ | [11](lessons/11-tags-releases.md) |
| ১২ | প্রোটেকশন ও CI | Actions, required checks, Dependabot | lint+build ওয়ার্কফ্লো, `main` প্রোটেক্টেড | [12](lessons/12-protection-ci.md) |

**লেভেল-পাস মানদণ্ড:** `main`-এ সরাসরি push আটকায়; CI লাল হলে মার্জ হয় না; একটা রিলিজ প্রকাশিত।

### IV. Pro Max: অটোমেশন, ফরেনসিক, নিরাপত্তা
| # | লেসন | মূল দক্ষতা | প্রজেক্ট টাস্ক | ফাইল |
|---|---|---|---|---|
| ১৩ | Hooks ও কোয়ালিটি গেট | husky, lint-staged, commitlint | খারাপ কমিট বার্তা আটকানো | [13](lessons/13-hooks-quality.md) |
| ১৪ | ইতিহাস-ফরেনসিক | `bisect`, `worktree`, `log -S`, signed commits | লুকানো বাগ খোঁজা | [14](lessons/14-advanced-history.md) |
| ১৫ | নিরাপত্তা ও ওয়ার্কফ্লো | সিক্রেট-ফাঁস প্রটোকল, ফর্ক, ব্রাঞ্চিং স্ট্র্যাটেজি | ক্যাপস্টোন: `v1.0.0` + ওপেন-সোর্স PR | [15](lessons/15-security-and-workflows.md) |

**কোর্স-সমাপ্তি মানদণ্ড (ক্যাপস্টোন):** [লেসন ১৫](lessons/15-security-and-workflows.md)-এর ছয়টা কাজ সম্পন্ন।

## V. Enterprise: GitHub platform operations

| # | লেসন | মূল দক্ষতা | প্রজেক্ট টাস্ক |
|---|---|---|---|
| ১৬ | Organization architecture | Enterprise, organization, team ও repository topology | Ownership এবং permission model আঁকুন |
| ১৭ | Identity and access | SSO, SCIM, roles এবং lifecycle access | Joiner-mover-leaver matrix বানান |
| ১৮ | Repository governance | Templates, properties, CODEOWNERS এবং lifecycle | Repository creation standard বানান |
| ১৯ | Rulesets | Branch rules, required checks এবং bypass | Production ruleset ডিফাইন করুন |
| ২০ | Enterprise CI/CD | Reusable workflows, OIDC এবং environments | Secure promotion flow ডিজাইন করুন |
| ২১ | Supply-chain security | Actions, SBOM, attestations এবং releases | Supply-chain baseline বানান |
| ২২ | Security and compliance | Alert SLAs, audit evidence এবং remediation | Compliance evidence checklist বানান |
| ২৩ | Migration | Inventory, waves, cutover এবং rollback | Migration runbook বানান |
| ২৪ | Backup and recovery | RPO/RTO, mirrors এবং restore drill | একটি restore exercise চালান |
| ২৫ | Enterprise capstone | Organization-wide GitHub operating model | 90-day enterprise adoption blueprint |

## সমান্তরাল ট্র্যাক: প্যাকেজ (Next.js শেখা)
৩৯টা ইনস্টল-করা প্যাকেজ আপনি **একটা একটা করে, প্রতিটি আলাদা ব্রাঞ্চ + PR-এ** চালু করবেন: [PACKAGES.md](PACKAGES.md)। এতে Git অনুশীলন ও Next.js শেখা একসাথে হয়।

| কখন শুরু | কোন প্যাকেজ-গ্রুপ |
|---|---|
| লেসন ০৪–০৬-এর পর | zod, react-hook-form, sonner, next-themes |
| লেসন ০৯–১০-এর পর | zustand, @tanstack/react-query, nuqs, date-fns |
| লেসন ১২-এর আগে | vitest + Testing Library (যাতে CI-তে `pnpm test` রাখা যায়) |
| লেসন ১৩ | prettier, husky, lint-staged, commitlint |
| লেসন ১১ | @changesets/cli |

## কীভাবে এগোবেন (রোজকার চক্র)
1. [PROGRESS.md](PROGRESS.md) খুলুন, পরের লেসন বাছুন।
2. লেসন পড়ুন: ধারণা আগে, কমান্ড পরে।
3. **নিজে টাইপ করুন।** AI শুধু ব্যাখ্যা করবে ([AI নিয়ম](ai/CONSTITUTION.md))।
4. লেসনের প্রজেক্ট টাস্ক আলাদা ব্রাঞ্চে করুন → PR → মার্জ।
5. চেকপয়েন্ট নিজে যাচাই করে টিক দিন।
6. আটকে গেলে: `git status` → `git help <cmd>` → [VERIFY.md](ai/VERIFY.md) → AI মেন্টর।

## শেখার পরে কী (পরবর্তী ধাপ)
- Pro Git বই (বিনামূল্যে): https://git-scm.com/book
- GitHub Skills (ইন্টারঅ্যাকটিভ কোর্স): https://skills.github.com ⚠️ ঠিকানা আপনার দিক থেকে যাচাই করুন
- নিজের বাস্তব প্রজেক্টে এই ওয়ার্কফ্লো প্রয়োগ করুন; একটা ওপেন-সোর্স রিপোতে অবদান রাখুন।
