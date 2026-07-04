interface LogoIconProps {
  size?: number;
  className?: string;
}

/** Letter-based monogram for favicon contexts only — not used in nav wordmark */
export default function LogoIcon({ size = 32, className = "" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="#0a1628" />
      <path
        d="M10 9h5.8c2.8 0 4.7 1.5 4.7 4 0 1.7-.9 2.9-2.3 3.4 1.6.5 2.8 1.8 2.8 3.8 0 2.6-2 4.3-5.1 4.3H10V9zm3.2 5.8h2.4c1.2 0 1.9-.6 1.9-1.5 0-.9-.7-1.5-1.9-1.5h-2.4v3zm0 6.7h2.7c1.4 0 2.2-.7 2.2-1.9 0-1.2-.8-1.9-2.2-1.9h-2.7v3.8z"
        fill="#ffffff"
      />
    </svg>
  );
}
