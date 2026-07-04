import ReviewCarousel from "@/components/ui/ReviewCarousel";
import PressLogos from "@/components/ui/PressLogos";
import DecorativeBlob, { QuoteWatermark } from "@/components/illustrations/DecorativeBlob";

export default function CardTwoEvidence() {
  return (
    <article className="reviews-section">
      <DecorativeBlob variant="reviews" />
      <QuoteWatermark />
      <header className="section-header">
        <h2 className="section-title">Graduates who tailored got more callbacks</h2>
        <p className="section-lead section-lead--large">
          Real reviews from students at international universities.
        </p>
      </header>

      <ReviewCarousel />

      <PressLogos />
    </article>
  );
}
