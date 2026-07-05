type SectionEnterHintProps = {
  variant?: "dark" | "light";
  isLast?: boolean;
};

export default function SectionEnterHint({
  variant = "light",
  isLast = false,
}: SectionEnterHintProps) {
  return (
    <p
      className={`section-enter-hint section-enter-hint--${variant}`}
      aria-hidden="true"
    >
      <span>Hit </span>
      <kbd className="section-enter-hint__key">Enter</kbd>
      <span>{isLast ? " to return to top" : " for next section"}</span>
    </p>
  );
}
