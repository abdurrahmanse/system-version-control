# ডিজাইন সিস্টেম: "Paper · Ink · Signal"

তিন স্টাইলের মিশ্রণ, শেখার সাইটের জন্য:

| স্টাইল | কীভাবে প্রয়োগ |
|---|---|
| **Minimalism** | বিস্তর সাদা জায়গা, মাত্র **একটা অ্যাকসেন্ট** (`signal`), কোনো গ্রেডিয়েন্ট/গ্লো নেই |
| **Brutalism** | মোটা (২px) বর্ডার, শার্প কোণ (`--radius: 0`), হার্ড অফসেট শ্যাডো, মনোস্পেস বড়-হাতের লেবেল |
| **Classicism** | সেরিফ শিরোনাম (Playfair Display), রোমান সংখ্যার সেকশন, ডাবল রুল, প্রতিসম/কেন্দ্রীয় লেআউট |

বিষয়বস্তু-সংযোগ: পটভূমির commit-graph, `git log`-এর মতো লেসন-রেল: যাতে সাইট দেখেই বোঝা যায় এটা version control শেখার জায়গা।

## টোকেন (`app/globals.css`)
| টোকেন | লাইট | ডার্ক | ব্যবহার |
|---|---|---|---|
| `--background` | কাগজ (উষ্ণ অফ-হোয়াইট) | কালি (গাঢ়) | পেজ |
| `--foreground` | কালি | কাগজ | টেক্সট, বর্ডার, শ্যাডো |
| `--card` | হালকা কাগজ | সামান্য হালকা কালি | কার্ড |
| `--signal` | সিঁদুর-লাল | উজ্জ্বল কমলা-লাল | **একমাত্র** অ্যাকসেন্ট |
| `--border`/`--input` | = foreground | = foreground | সব বর্ডার |
| `--radius` | `0` | `0` | কোণ নেই |

থিম: `next-themes` (`attribute="class"`, `defaultTheme="system"`); টগল: [theme-toggle.tsx](../components/site/theme-toggle.tsx) (Light / Dark / System)। শ্যাডো ও বর্ডার `var(--foreground)` ব্যবহার করে বলে থিম বদলালে আপনা-আপনি উল্টে যায়।

## টাইপোগ্রাফি
| ভূমিকা | ফন্ট | ব্যবহার |
|---|---|---|
| শিরোনাম | Playfair Display (`font-heading`) | h1/h2, কার্ড-শিরোনাম, রোমান সংখ্যা |
| বডি | Inter (`font-sans`) | অনুচ্ছেদ |
| লেবেল/কোড | JetBrains Mono (`font-mono`) | বাটন, ব্যাজ, কমান্ড, ইয়ারব্রো |

## নিয়ম
1. **একটা অ্যাকসেন্ট:** লাল (`signal`) ছাড়া অন্য রঙ নয়।
2. **কোণ নয়:** `rounded-full`/`rounded-lg` ব্যবহার নয় (radius টোকেন ০)।
3. **হার্ড শ্যাডো:** `shadow-[4px_4px_0_0_var(--foreground)]`; ঝাপসা শ্যাডো নয়।
4. **সেকশন = রোমান সংখ্যা + আইকন + সেরিফ শিরোনাম** ([section.tsx](../components/site/section.tsx))।
5. **রঙ হার্ডকোড নয়:** সবসময় টোকেন (`bg-signal`, `text-foreground`)।
6. কাস্টম CSS ফাইল নয়: স্টাইল = টোকেন + Tailwind ইউটিলিটি + shadcn কম্পোনেন্ট।
7. প্রতিটি আইকন `lucide-react` থেকে; আইকন-নাম ইনস্টল-করা ভার্সনে আছে কি `pnpm build` ধরবে।

## কম্পোনেন্ট
| ফাইল | কাজ |
|---|---|
| `components/site/hero.tsx` | ফ্রেমড হিরো + commit-graph ব্যাকগ্রাউন্ড |
| `components/site/git-graph.tsx` | সাজসজ্জার commit-graph SVG |
| `components/site/section.tsx` | রোমান-সংখ্যা সেকশন, `IconTile` |
| `components/site/lesson-timeline.tsx` | `git log`-স্টাইল লেসন-রেল |
| `components/site/theme-toggle.tsx` | Light/Dark/System |
| `lib/lessons.ts` | লেসনের একক ডেটা-উৎস |

shadcn কম্পোনেন্টে (`components/ui/card|button|badge`) এই স্টাইল বসানো (বর্ডার, শ্যাডো, মনো-লেবেল)।
