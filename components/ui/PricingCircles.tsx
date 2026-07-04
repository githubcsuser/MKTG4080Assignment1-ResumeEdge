const TIERS = [
  {
    name: "Free Scan",
    price: "$0",
    popular: false,
    features: [
      "How well your resume matches one job",
      "Results in under 2 minutes",
      "Missing words recruiters look for",
      "3 ways to improve your bullet points",
    ],
  },
  {
    name: "Resume Rewrite",
    price: "$19",
    popular: true,
    features: [
      "Everything in Free Scan",
      "Full resume rewrite for each job you upload",
      "Rewritten bullets ready in under 2 minutes",
      "Download a ready-to-send PDF",
    ],
  },
  {
    name: "Job Hunt Pack",
    price: "$39",
    popular: false,
    features: [
      "Everything in Resume Rewrite",
      "Cover letter written for that job",
      "Better LinkedIn headline",
      "Get help faster",
    ],
  },
];

export default function PricingCircles() {
  return (
    <div className="pricing-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`pricing-card relative ${
              tier.popular ? "pricing-card--featured" : "pricing-card--default"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-8 bg-orange text-white text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                Most Popular
              </span>
            )}
            <p className="font-bold text-xl text-black">{tier.name}</p>
            <p className="font-bold my-3 text-4xl text-green">
              {tier.price}
            </p>
            {tier.popular && (
              <p className="text-lg text-[#4a4a5e] mb-2">Best for active job seekers</p>
            )}
            <ul className="text-lg text-left list-none p-0 space-y-3.5 mt-5 leading-relaxed text-black flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2 items-start">
                  <span className="text-green shrink-0" aria-hidden>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
