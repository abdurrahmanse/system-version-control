import { CONTACT_QUICK, CONTACT_QUICK_LINK } from "@/modules/contact/data/contact";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";

export function QuickAnswers() {
  return (
    <div className="max-w-3xl space-y-4">
      <Accordion
        type="single"
        collapsible
        className="border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]"
      >
        {CONTACT_QUICK.map((f, i) => (
          <AccordionItem key={f.q} value={`q-${i}`} className="px-4">
            <AccordionTrigger className="font-heading text-lg font-bold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <LinkArrow href={CONTACT_QUICK_LINK.href}>{CONTACT_QUICK_LINK.label}</LinkArrow>
    </div>
  );
}
