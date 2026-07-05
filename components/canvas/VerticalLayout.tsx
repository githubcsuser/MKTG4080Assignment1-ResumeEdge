"use client";

import { CARDS } from "@/lib/cards";
import TopNav from "@/components/layout/TopNav";
import CardOneOrigin from "@/components/cards/CardOneOrigin";
import CardTwoEvidence from "@/components/cards/CardTwoEvidence";
import CardThreeDiscovery from "@/components/cards/CardThreeDiscovery";
import CardFourInteraction, {
  LeadFormSection,
} from "@/components/cards/CardFourInteraction";
import CardFiveDestination from "@/components/cards/CardFiveDestination";
import SectionEnterHint from "@/components/ui/SectionEnterHint";
import { useCardScroll } from "./useCardScroll";
import { useSectionEnterNavigation } from "./useSectionEnterNavigation";
import { ScrollProvider } from "./ScrollContext";

const CARD_COMPONENTS: Record<string, React.ReactNode> = {
  cardone: <CardOneOrigin />,
  cardtwo: <CardThreeDiscovery />,
  cardthree: <CardTwoEvidence />,
  cardfour: <CardFourInteraction />,
  cardfive: <CardFiveDestination />,
};

function SectionEnterNavigation() {
  useSectionEnterNavigation();
  return null;
}

export default function VerticalLayout() {
  const { scrollToSection, activeSection } = useCardScroll();

  return (
    <ScrollProvider scrollToSection={scrollToSection} activeSection={activeSection}>
      <SectionEnterNavigation />
      <TopNav />

      <main className="page-main">
        {CARDS.flatMap((card) => {
          const section = (
            <section
              key={card.id}
              id={card.id}
              data-card={card.id}
              className={`site-section ${card.bgClass}${
                card.id === "cardtwo" || card.id === "cardfour"
                  ? " site-section--flush"
                  : ""
              }${
                card.id === "cardone"
                  ? " viewport-section viewport-section--hero"
                  : ""
              }${
                card.id === "cardthree"
                  ? " viewport-section viewport-section--reviews"
                  : ""
              }`}
              aria-label={`${card.label}, ${card.subtitle}`}
            >
              {card.id === "cardtwo" || card.id === "cardfour" ? (
                CARD_COMPONENTS[card.id]
              ) : (
                <>
                  <div className="section-container">
                    {CARD_COMPONENTS[card.id]}
                  </div>
                  {card.id === "cardone" ? (
                    <SectionEnterHint variant="dark" />
                  ) : card.id === "cardthree" ? (
                    <SectionEnterHint />
                  ) : null}
                </>
              )}
            </section>
          );

          if (card.id === "cardthree") {
            return [section, <LeadFormSection key="lead-form" />];
          }

          return [section];
        })}
      </main>
    </ScrollProvider>
  );
}
