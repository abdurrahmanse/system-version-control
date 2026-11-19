import { COMMAND_TABS } from "@/modules/concepts/data/concepts";
import { CommandLine } from "@/shared/components/common/command-line";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

export function CommandsTabs() {
  return (
    <Tabs defaultValue={COMMAND_TABS[0].value} className="max-w-2xl">
      <TabsList>
        {COMMAND_TABS.map(({ value, label, icon: Icon }) => (
          <TabsTrigger key={value} value={value}>
            <Icon />
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {COMMAND_TABS.map(({ value, lines }) => (
        <TabsContent
          key={value}
          value={value}
          className="mt-3 space-y-2 border-2 border-edge bg-card p-4 shadow-[4px_4px_0_0_var(--shadow-hard)]"
        >
          {lines.map((l) => (
            <div key={l}>
              <CommandLine command={l} />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
