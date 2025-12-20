interface PatternDividerProps {
  variant: "mesob" | "tibeb";
}

export default function PatternDivider({ variant }: PatternDividerProps) {
  if (variant === "mesob") {
    return (
      <div className="w-full h-24 flex items-center justify-center overflow-hidden opacity-20">
        <svg
          width="100vw"
          height="100"
          viewBox="0 0 100vw 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="mesob-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="30"
              cy="30"
              r="2"
              fill="currentColor"
              className="text-oxidized-brass"
            />
            <path
              d="M15 30 L30 15 L45 30 L30 45 Z"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-oxidized-brass"
            />
          </pattern>
          <rect width="100vw" height="100" fill="url(#mesob-pattern)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-24 flex items-center justify-center overflow-hidden opacity-30">
      <svg
        width="100vw"
        height="100"
        viewBox="0 0 100vw 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="tibeb-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="10"
            y="10"
            width="10"
            height="10"
            fill="#C8A882"
            transform="rotate(45 15 15)"
          />
          <rect
            x="20"
            y="20"
            width="10"
            height="10"
            fill="#C8A882"
            transform="rotate(45 25 25)"
          />
          <rect
            x="30"
            y="10"
            width="10"
            height="10"
            fill="#C8A882"
            transform="rotate(45 35 15)"
          />
        </pattern>
        <rect width="100vw" height="100" fill="url(#tibeb-pattern)" />
      </svg>
    </div>
  );
}
