# Git Field Guide: Version Control শেখার প্ল্যাটফর্ম

পুরো প্রজেক্টটাই **Git ও GitHub-এর পুরো ওয়ার্কফ্লো হাতে-কলমে শেখার জন্য**: জিরো থেকে Pro Max। একটা শেখার ওয়েবসাইট (Next.js + shadcn/ui), ১৫টা লেসনের ডকুমেন্টেশন, প্র্যাকটিস-রিপো এবং AI মেন্টর।

## শুরু করুন
```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## কোথা থেকে শুরু
1. **[docs/ROADMAP.md](docs/ROADMAP.md): সম্পূর্ণ রোডম্যাপ (জিরো → Pro Max)**
2. [docs/README.md](docs/README.md): কারিকুলাম ও শেখার পদ্ধতি
3. [docs/PROGRESS.md](docs/PROGRESS.md): আপনার চেকলিস্ট (শেষ করা লেসনে টিক দিন)
4. [docs/PACKAGES.md](docs/PACKAGES.md): ইনস্টল করা প্যাকেজগুলোর গাইড (একটা একটা করে চালু করার জন্য)
5. [docs/ai/CONSTITUTION.md]
6. [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md): সাইটের ডিজাইন সিস্টেম(docs/ai/CONSTITUTION.md): AI মেন্টরের নিয়ম

## AI মেন্টর
- [AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md): AI টুলগুলো স্বয়ংক্রিয়ভাবে নিয়ম পড়ে।
- Claude Code-এ: `git-mentor` সাবএজেন্ট ([.claude/agents/git-mentor.md](.claude/agents/git-mentor.md)), যে শুধু পড়ে ও ব্যাখ্যা করে, আপনার হয়ে কমিট/পুশ করে না।
- [.claude/settings.json](.claude/settings.json): ঝুঁকিপূর্ণ Git কমান্ডের আগে AI আপনার অনুমতি চাইবে।

## প্রযুক্তি
Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui + Radix UI · next-themes (light/dark) · TypeScript · pnpm

## ওয়েবসাইটের ৫টা পেজ
`/` হোম · `/roadmap` সম্পূর্ণ শেখার পথ · `/concepts` Git-এর মানসিক মডেল · `/packages` টুলবক্স · `/mentor` AI মেন্টরের নিয়ম
