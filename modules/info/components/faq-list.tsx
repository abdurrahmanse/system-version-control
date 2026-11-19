import { FAQ_LINK_LABEL, FAQS } from "@/modules/info/data/faq";
import { LinkArrow } from "@/shared/components/common/link-arrow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";

export function FaqList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-3xl border-2 border-edge bg-card shadow-[4px_4px_0_0_var(--shadow-hard)]"
    >
      {FAQS.map((f, i) => (
        <AccordionItem key={f.q} value={`q-${i}`} className="px-4">
          <AccordionTrigger className="font-heading text-lg">{f.q}</AccordionTrigger>
          <AccordionContent className="space-y-3 text-muted-foreground">
            <p>{f.a}</p>
            <LinkArrow href={f.href}>{FAQ_LINK_LABEL}</LinkArrow>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
