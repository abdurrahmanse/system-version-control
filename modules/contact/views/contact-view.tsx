import { ContactAside } from "@/modules/contact/components/contact-aside";
import { FeedbackForm } from "@/modules/contact/components/feedback-form";
import { QuickAnswers } from "@/modules/contact/components/quick-answers";
import {
  CONTACT_FIX_LABEL,
  CONTACT_FIX_NODES,
  CONTACT_FIX_SECTION,
  CONTACT_FORM_SECTION,
  CONTACT_HERO,
  CONTACT_QUICK_SECTION,
} from "@/modules/contact/data/contact";
import { PageMain } from "@/shared/components/common/page-main";
import { SafeSection } from "@/shared/components/common/safe-section";
import { Flowchart } from "@/shared/components/diagrams/flowchart";
import { PageIntro } from "@/shared/components/hero/page-intro";
import { Section } from "@/shared/components/section/section";

export function ContactView() {
  return (
    <PageMain>
      <PageIntro copy={CONTACT_HERO} />
      <Section copy={CONTACT_FORM_SECTION}>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SafeSection>
              <FeedbackForm />
            </SafeSection>
          </div>
          <div className="lg:col-span-2">
            <ContactAside />
          </div>
        </div>
      </Section>
      <Section copy={CONTACT_FIX_SECTION}>
        <Flowchart label={CONTACT_FIX_LABEL} nodes={CONTACT_FIX_NODES} perRow={3} />
      </Section>
      <Section copy={CONTACT_QUICK_SECTION}>
        <QuickAnswers />
      </Section>
    </PageMain>
  );
}
