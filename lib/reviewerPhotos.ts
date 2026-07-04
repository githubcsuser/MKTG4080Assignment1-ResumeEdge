/**
 * Local student avatar portraits (public/avatars/reviewer-XX.webp).
 * Young undergrad-style campus headshots, no external URLs.
 */

export type Testimonial = {
  name: string;
  university: string;
  degree: string;
  quote: string;
  outcome: string;
  photo: string;
};

const avatar = (n: number) => `/avatars/reviewer-${String(n).padStart(2, "0")}.webp`;

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Wei Zhang",
    university: "Chinese University of Hong Kong",
    degree: "BSc Computer Science",
    quote:
      "I pasted a fintech grad posting and ResumeEdge rewrote my bullets around Python and REST APIs. Two phone screens in four weeks.",
    outcome: "Got 2 interviews",
    photo: avatar(1),
  },
  {
    name: "Priya Nair",
    university: "National University of Singapore",
    degree: "BEng Electrical Engineering",
    quote:
      "Same resume, two job posts, two tailored versions. My resume fit jumped 47 points and recruiters actually replied.",
    outcome: "Resume fit +47%",
    photo: avatar(2),
  },
  {
    name: "Emma Wong",
    university: "University of Hong Kong",
    degree: "BA Economics",
    quote:
      "Six hundred applicants for one role. I customized my resume to the posting and landed an offer in two weeks.",
    outcome: "Got offer",
    photo: avatar(3),
  },
  {
    name: "James Okonkwo",
    university: "London School of Economics",
    degree: "BSc Politics",
    quote:
      "ResumeEdge flagged words missing from the analyst posting. After fixing them, I got three first-round interviews.",
    outcome: "Got 3 interviews",
    photo: avatar(4),
  },
  {
    name: "Sophie Laurent",
    university: "UCL",
    degree: "BA Communications",
    quote:
      "My generic bullets became quantified project lines that matched the JD. Callback rate went up immediately.",
    outcome: "More callbacks",
    photo: avatar(5),
  },
  {
    name: "Mei Lin Tan",
    university: "NTU Singapore",
    degree: "BSc Data Science",
    quote:
      "I tailored my resume for a data analyst role and my fit went from 38% to 91%. Worth every minute.",
    outcome: "Resume fit +53%",
    photo: avatar(6),
  },
  {
    name: "Carlos Mendez",
    university: "University of Toronto",
    degree: "BBA Finance",
    quote:
      "Pasted a banking posting, got a rewritten resume in minutes. Recruiter said my bullets finally matched the skills they wanted.",
    outcome: "Got interview",
    photo: avatar(7),
  },
  {
    name: "Aisha Rahman",
    university: "University of Melbourne",
    degree: "BSc Biomedical Engineering",
    quote:
      "I was applying blind to med-tech roles. ResumeEdge showed me exactly which skills the posting wanted. Three interviews followed.",
    outcome: "Got 3 interviews",
    photo: avatar(8),
  },
  {
    name: "Maya Chen",
    university: "Stanford University",
    degree: "BSc Computer Science",
    quote:
      "My lab experience was buried in jargon. The rewriter pulled out metrics and matched them to the SWE posting.",
    outcome: "Got interview",
    photo: avatar(9),
  },
  {
    name: "Tyler Brennan",
    university: "University of Michigan",
    degree: "BBA Finance",
    quote:
      "One posting, one tailored resume. My fit score hit 88% and I got past the first screen for the first time.",
    outcome: "88% resume fit",
    photo: avatar(10),
  },
];
