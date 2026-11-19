# AGENTS.md: এই রিপোতে কাজ করার নিয়ম (সব AI এজেন্টের জন্য)

## এই প্রজেক্ট কী
**Git Field Guide**: পুরো প্রজেক্টের একটাই উদ্দেশ্য, **Version Control (Git + GitHub) শেখা**: জিরো থেকে Pro Max। ওয়েবসাইট (Next.js + shadcn/ui), ডক, প্র্যাকটিস-রিপো ও AI মেন্টর সবই এই শেখার অংশ। সম্পূর্ণ রোডম্যাপ: [docs/ROADMAP.md](docs/ROADMAP.md)। ব্যবহারকারী ফুল-স্ট্যাক ইঞ্জিনিয়ার, Git/GitHub শিখছেন জিরো থেকে অ্যাডভান্সড পর্যন্ত।

## সবার আগে পড়ো (বাধ্যতামূলক)
1. [docs/ai/CONSTITUTION.md](docs/ai/CONSTITUTION.md): হ্যালুসিনেশন, পক্ষপাত ও নিরাপত্তার নিয়ম। **এটা সবকিছুর ওপরে।**
2. [docs/PROGRESS.md](docs/PROGRESS.md): ব্যবহারকারী কোন লেসনে আছেন।
3. [docs/README.md](docs/README.md): কারিকুলাম।

## সংক্ষেপে সোনালি নিয়ম
- আন্দাজে কমান্ড/ফ্ল্যাগ/API লিখবে না। `--help`, `git help`, ইনস্টল করা প্যাকেজের ডক, অফিশিয়াল ডক দিয়ে যাচাই করো; অযাচাইকৃত হলে `⚠️` দাও।
- **Teaching mode:** ব্যবহারকারী না চাইলে Git/GitHub-এর পরিবর্তনকারী কমান্ড (commit, push, merge, reset…) নিজে চালাবে না। কমান্ড ও ব্যাখ্যা দাও, উনি চালাবেন।
- ধ্বংসাত্মক কমান্ডের আগে ঝুঁকি ব্যাখ্যা + dry-run + সম্মতি।
- বিকল্পগুলো নিরপেক্ষভাবে দেখাও; মতামত আলাদা করে বলো।
- কোড স্টাইল ও টুল: `pnpm` ব্যবহার করো। সংশ্লিষ্ট প্যাকেজ নির্দেশিকা: [docs/PACKAGES.md](docs/PACKAGES.md)।
- **Architecture:** [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) মানো। modular monolith: `app/` (routing) → `modules/` (feature) → `shared/`। এক মডিউল অন্যটাকে শুধু `index.ts`/`server.ts` দিয়ে ধরবে। UI টেক্সট কখনো কম্পোনেন্টে লিখবে না, মডিউলের `data/` ফোল্ডারে রাখো। পেজের প্রস্থ শুধু `Container` থেকে। কোড বদলালে `pnpm verify` চালাও।
- **ভুলে করো না:** ডেভ সার্ভার (`pnpm dev`) চলার সময় একই ফোল্ডারে `pnpm build` চালিও না (`.next` নষ্ট হয়); আলাদা কপিতে বিল্ড করো। কখনো `husky --help` চালিও না।
- UI: [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) মানো: "Paper · Ink · Signal" (minimal + brutalist + classic), থিম `next-themes` দিয়ে (light/dark/system)। শুধু shadcn/Radix কম্পোনেন্ট ও টোকেন; হার্ডকোড রঙ বা কাস্টম CSS ফাইল নয়।
- লেসনের তথ্য বদলালে `lib/lessons.ts` ও `docs/ROADMAP.md` একসাথে মিলিয়ে রাখো।

## কমান্ড
```bash
pnpm dev      # ডেভ সার্ভার
pnpm build    # প্রোডাকশন বিল্ড (কমিটের আগে পাস করা উচিত)
pnpm lint     # ESLint
```

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
