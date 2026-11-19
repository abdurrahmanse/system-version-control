# প্যাকেজ গাইড: ৩৯টি প্যাকেজ, একটা একটা করে শেখা

প্রজেক্টে **৩৯টি অতিরিক্ত প্যাকেজ ইনস্টল করা আছে (২২ runtime + ১৭ dev)**, কিন্তু **কোনোটাই কনফিগ/চালু করা নেই**। এটাই আপনার অনুশীলন: প্রতিটি প্যাকেজ **নিজের ব্রাঞ্চ + PR-এ** চালু করুন। এতে একসাথে Next.js ও Git/GitHub দুটোই শেখা হয়।

## ব্যবহারের নিয়ম (প্রতিটি প্যাকেজের জন্য একই চক্র)
```bash
git switch main && git pull
git switch -c feature/<প্যাকেজ-বিষয়>      # যেমন feature/zod-task-form
# ১. এই ডক + অফিশিয়াল ডক পড়ুন   ২. ছোট করে ব্যবহার করুন
pnpm build && pnpm lint                      # ৩. যাচাই
git add -p && git commit -m "feat: ..."      # ৪. কমিট
git push -u origin HEAD && gh pr create      # ৫. PR → CI → squash merge (লেসন ০৬)
```

## সততার লেবেল
- ✅ **টাইপ-চেক/চালিয়ে যাচাই করা**: নিচের কোড এই প্রজেক্টের ইনস্টল-করা ভার্সনে `tsc` বা আসল রান দিয়ে মিলিয়ে দেখা হয়েছে।
- 📖 **ডক দেখুন**: ভার্সন নতুন বা API বড়; আমি আন্দাজে কোড লিখিনি। অফিশিয়াল ডক/ইনস্টল-করা README পড়ে নিজে মেলান।
- ⚠️ নতুন মেজর ভার্সন: `package.json` দেখুন, মেমোরি-ভিত্তিক টিউটোরিয়ালের কোড হুবহু কাজ নাও করতে পারে।

---

## পূর্ব-ইনস্টল (shadcn দিয়ে এসেছে)
| প্যাকেজ | কাজ |
|---|---|
| `radix-ui` | অ্যাক্সেসিবল আনস্টাইলড UI প্রিমিটিভ (Dialog, Select, Tabs…) |
| `class-variance-authority` | কম্পোনেন্টের variant ক্লাস (Button `variant`/`size`) |
| `cn` | ক্লাসনেম মার্জ হেল্পার (shadcn-ui-র অফিশিয়াল প্যাকেজ, ✅ মেইনটেইনার যাচাই) |
| `lucide-react` | আইকন |
| `tw-animate-css` | Tailwind অ্যানিমেশন ক্লাস |
| `shadcn` | CLI: `npx shadcn@latest add <component>` ⚠️ ভার্সন `package.json`-এ দেখুন |

---

## ফর্ম ও ভ্যালিডেশন
### 1. `zod` ✅: স্কিমা ও টাইপ ভ্যালিডেশন
- **কেন:** রানটাইমে ডেটা যাচাই + একই স্কিমা থেকে TypeScript টাইপ। ফর্ম, API, এনভ সবখানে।
- **ব্রাঞ্চ:** `feature/zod-task-schema`
```ts
import { z } from "zod";
export const taskSchema = z.object({ title: z.string().min(1, "Required").max(80) });
export type TaskInput = z.infer<typeof taskSchema>;
```
📖 https://zod.dev

### 2. `react-hook-form` ✅ ও 3. `@hookform/resolvers` ✅
- **কেন:** পারফরম্যান্ট ফর্ম স্টেট; resolver দিয়ে zod জোড়া।
- **ব্রাঞ্চ:** `feature/task-form` (লেসন ০৪-এর Dialog-এর ভেতরে ফর্ম বসান)
```tsx
"use client";
const { register, handleSubmit, formState: { errors } } =
  useForm<TaskInput>({ resolver: zodResolver(taskSchema) });
// <form onSubmit={handleSubmit((values) => ...)}><input {...register("title")} />{errors.title?.message}</form>
```
(`import { zodResolver } from "@hookform/resolvers/zod"`) 📖 react-hook-form.com

---

## ডেটা ও স্টেট
### 4. `@tanstack/react-query` ✅: সার্ভার-স্টেট (fetch, cache, retry)
`QueryClientProvider` দিয়ে র‍্যাপ করতে হয়; `useQuery({ queryKey, queryFn })`। ক্লায়েন্ট কম্পোনেন্টে।
- **ব্রাঞ্চ:** `feature/react-query` 📖 tanstack.com/query

### 5. `@tanstack/react-table` 📖⚠️ (v9, নতুন)
- **কেন:** হেডলেস ডেটা-টেবিল (সর্ট/ফিল্টার/পেজিনেশন), UI আপনার (shadcn `table`)।
- **ব্রাঞ্চ:** `feature/task-table`। API মেজর ভার্সনে বদলেছে; **মেমোরির টিউটোরিয়াল অনুসরণ নয়, ডক পড়ুন:** tanstack.com/table

### 6. `zustand` ✅: ক্লায়েন্ট স্টেট
```ts
import { create } from "zustand";
import { nanoid } from "nanoid";
type Store = { tasks: { id: string; title: string }[]; add: (t: string) => void };
export const useTasks = create<Store>((set) => ({
  tasks: [],
  add: (title) => set((s) => ({ tasks: [...s.tasks, { id: nanoid(), title }] })),
}));
```
- **ব্রাঞ্চ:** `feature/zustand-task-store` 📖 zustand.docs.pmnd.rs

### 7. `nuqs` ✅: URL-এ স্টেট (`?page=2`): ফিল্টার/পেজিনেশন শেয়ারযোগ্য লিঙ্কে
```tsx
"use client";
import { useQueryState, parseAsInteger } from "nuqs";
const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
```
লেআউটে `NuqsAdapter` (`import { NuqsAdapter } from "nuqs/adapters/next/app"`) দিয়ে র‍্যাপ করতে হয়। ব্রাঞ্চ: `feature/url-filters` (লেসন ০৬-র Select ফিল্টার URL-এ সংযুক্ত করুন) 📖 nuqs.dev

### 8. `ky` ✅: ছোট fetch র‍্যাপার (retry, JSON)
`ky.get("/api/x").json()`। ব্রাঞ্চ: `feature/http-client` 📖 github.com/sindresorhus/ky ⚠️ (v2)

---

## UI, মোশন, ইন্টারঅ্যাকশন
### 9. `sonner` ✅: টোস্ট নোটিফিকেশন
`<Toaster />` একবার লেআউটে; `toast.success("Saved")`। ব্রাঞ্চ: `feature/toasts`
### 10. `next-themes` ✅: ডার্ক/লাইট থিম
`<ThemeProvider attribute="class">`; `const { setTheme } = useTheme()`। (এখন `<html>`-এ হার্ডকোডেড `dark` ক্লাস আছে; থিম টগলের সময় সেটা সরাতে হবে।) ব্রাঞ্চ: `feature/theme-toggle` (Switch/DropdownMenu দিয়ে)
### 11. `recharts` 📖: চার্ট (shadcn `chart` কম্পোনেন্ট এর ওপর বসে) ব্রাঞ্চ: `feature/task-stats`
### 12. `cmdk` 📖: কমান্ড প্যালেট (Ctrl/Cmd+K) (shadcn `command` কম্পোনেন্ট) ব্রাঞ্চ: `feature/command-palette`
### 13. `motion` 📖⚠️ (v14): অ্যানিমেশন। ডক দেখুন: motion.dev
### 14–15. `@dnd-kit/core`, `@dnd-kit/sortable` 📖: ড্র্যাগ-ড্রপ (টাস্ক সাজানো) ব্রাঞ্চ: `feature/drag-sort`
### 16. `embla-carousel-react` 📖: ক্যারোসেল ব্রাঞ্চ: `feature/carousel`
### 17. `react-day-picker` 📖⚠️ (v10): ক্যালেন্ডার/ডেট-পিকার (shadcn `calendar`) ব্রাঞ্চ: `feature/due-date`

---

## ইউটিলিটি
### 18. `date-fns` ✅: তারিখ ফরম্যাট/গণনা
`import { format } from "date-fns"; format(new Date(), "yyyy-MM-dd")` 📖 date-fns.org
### 19. `nanoid` ✅: ছোট ইউনিক আইডি: `nanoid()`
### 20. `use-debounce` ✅: ইনপুট ডিবাউন্স (সার্চ)
`const debounced = useDebouncedCallback((v: string) => ..., 300)` ব্রাঞ্চ: `feature/debounced-search`
### 21. `react-error-boundary` ✅: UI ক্র্যাশ ধরা
`<ErrorBoundary fallback={<p>Oops</p>}>…</ErrorBoundary>` ব্রাঞ্চ: `feature/error-boundary`
### 22. `@t3-oss/env-nextjs` ✅: টাইপ-সেফ এনভ ভেরিয়েবল (zod সহ)
```ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
export const env = createEnv({
  server: { DATABASE_URL: z.string().url() },
  client: { NEXT_PUBLIC_APP_NAME: z.string() },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
});
```
ব্রাঞ্চ: `chore/typed-env`; `.env.example` কমিট করুন (লেসন ১৫)।

---

## টেস্টিং (dev)
### 23–28. `vitest` ✅ + `@vitejs/plugin-react` + `jsdom` + `@testing-library/react` + `@testing-library/jest-dom` + `@testing-library/user-event`
এই সেটআপ **আসলে চালিয়ে পাস করা হয়েছে** (vitest 5.1.1):
`vitest.config.mts`
```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname) } },
  test: { environment: "jsdom", setupFiles: ["./vitest.setup.ts"] },
});
```
`vitest.setup.ts`: `import "@testing-library/jest-dom/vitest";`
`components/ui/button.test.tsx`
```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { Button } from "@/components/ui/button";

test("button click", async () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Save</Button>);
  await userEvent.click(screen.getByRole("button", { name: "Save" }));
  expect(onClick).toHaveBeenCalledTimes(1);
});
```
`package.json`-এ `"test": "vitest run"` স্ক্রিপ্ট যোগ করে `pnpm test`। ব্রাঞ্চ: `chore/vitest-setup` → পরে CI-তে `pnpm test` যোগ (লেসন ১২)।
(⚠️ `@vitejs/plugin-react` v6, `jsdom` v31 নতুন: কনফিগ ফেল করলে ডক দেখুন।)

### 29. `@playwright/test` ✅ (ভার্সন 1.65.1 ইনস্টল): E2E টেস্ট
ব্রাউজার আলাদা নামাতে হয়: `pnpm exec playwright install`। কনফিগ/ডক: 📖 playwright.dev ব্রাঞ্চ: `chore/e2e-playwright` (CI-তে ধীর, আলাদা জব রাখুন)

### 30. `msw` 📖⚠️ (v3): নেটওয়ার্ক মকিং (API হ্যান্ডলার)। API নতুন, ডক: mswjs.io

---

## কোড-কোয়ালিটি ও রিলিজ (dev): লেসন ১৩, ১১ এর সাথে
| # | প্যাকেজ | কাজ | লেসন |
|---|---|---|---|
| 31 | `prettier` ✅ (3.10.1) | কোড ফরম্যাটার | ১৩ |
| 32 | `prettier-plugin-tailwindcss` ✅ | Tailwind ক্লাস সাজায় (`.prettierrc`-এ `plugins`) | ১৩ |
| 33 | `husky` ✅ | Git hooks (`pnpm exec husky init` যাচাইকৃত) | ১৩ |
| 34 | `lint-staged` ✅ | শুধু staged ফাইলে লিন্ট/ফরম্যাট | ১৩ |
| 35–36 | `@commitlint/cli` + `@commitlint/config-conventional` ✅ | কমিট বার্তা যাচাই (যাচাইকৃত: খারাপ বার্তা ব্যর্থ, ভালো পাস) | ১৩ |
| 37 | `@changesets/cli` 📖 | ভার্সন ও CHANGELOG | ১১ |
| 38 | `@next/bundle-analyzer` 📖 | বান্ডল সাইজ বিশ্লেষণ; `next.config.ts`-এ র‍্যাপ করতে হয় (Next ডক দেখুন) | — |
| 39 | `knip` 📖⚠️ (v6) | অব্যবহৃত ফাইল/এক্সপোর্ট/ডিপেন্ডেন্সি খোঁজে: `pnpm exec knip` | — |

---

## প্যাকেজ নিয়ে সতর্কতা
- নতুন মেজর ভার্সনের API আপনার (বা AI-র) মেমোরির সাথে না মিলতে পারে। **সবসময় ইনস্টল করা ভার্সনের README/টাইপ/অফিশিয়াল ডক**।
- অপ্রয়োজনীয় প্যাকেজ বাদ দিতে `pnpm remove <pkg>` (এটাও একটা PR-এর যোগ্য কাজ)। `knip` এতে সাহায্য করে।
- `pnpm audit` দিয়ে ঝুঁকি দেখুন; Dependabot চালু রাখুন (লেসন ১২)।
- সম্পূর্ণ তালিকা ও ভার্সন: [package.json](../package.json)।
