interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: "text-xl md:text-[22px]",
  md: "text-2xl",
  lg: "text-2xl md:text-[28px]",
};

export default function Logo({
  variant = "light",
  size = "md",
  className = "",
}: LogoProps) {
  const resumeColor = variant === "light" ? "text-white" : "text-navy";

  return (
    <span
      className={`inline-flex items-center font-bold tracking-tight leading-none ${SIZES[size]} ${className}`}
      style={{ letterSpacing: "-0.02em" }}
    >
      <span className={resumeColor}>Resume</span>
      <span className="text-green">Edge</span>
    </span>
  );
}
