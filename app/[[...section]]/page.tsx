import VerticalLayout from "@/components/canvas/VerticalLayout";
import { CARDS } from "@/lib/cards";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ section: undefined }, ...CARDS.map((c) => ({ section: [c.slug] }))];
}

export default function HomePage() {
  return <VerticalLayout />;
}
