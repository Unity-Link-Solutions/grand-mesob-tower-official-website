/**
 * Ethiopian Pattern Components
 * Geometric patterns inspired by traditional Ethiopian art
 * Used as transparent/translucent overlays for depth and cultural identity
 */

interface PatternProps {
  className?: string;
  opacity?: number;
}

// Mesob-inspired circular pattern (represents the woven basket)
export function MesobPattern({ className = '', opacity = 0.1 }: PatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" />
      {/* Radiating lines */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x1 = 200 + 60 * Math.cos(rad);
        const y1 = 200 + 60 * Math.sin(rad);
        const x2 = 200 + 180 * Math.cos(rad);
        const y2 = 200 + 180 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
}

// Traditional Ethiopian cross pattern
export function CrossPattern({ className = '', opacity = 0.08 }: PatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="cross-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Vertical line */}
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
          {/* Horizontal line */}
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
          {/* Diamond corners */}
          <path
            d="M 50 20 L 60 30 L 50 40 L 40 30 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M 50 60 L 60 70 L 50 80 L 40 70 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#cross-pattern)" />
    </svg>
  );
}

// Geometric diamond/lattice pattern
export function DiamondPattern({ className = '', opacity = 0.06 }: PatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="diamond-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 80 40 L 40 80 L 0 40 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M 20 20 L 60 20 L 60 60 L 20 60 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#diamond-pattern)" />
    </svg>
  );
}

// Interlocking triangle pattern (Ethiopian textile inspired)
export function TrianglePattern({ className = '', opacity = 0.07 }: PatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="triangle-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          {/* Upward triangle */}
          <path
            d="M 30 0 L 60 52 L 0 52 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Downward triangle */}
          <path
            d="M 30 52 L 0 0 L 60 0 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="300" height="300" fill="url(#triangle-pattern)" />
    </svg>
  );
}

// Vertical stripe pattern (modern interpretation)
export function StripePattern({ className = '', opacity = 0.05 }: PatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <defs>
        <pattern id="stripe-pattern" x="0" y="0" width="20" height="200" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="0" x2="10" y2="200" stroke="currentColor" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#stripe-pattern)" />
    </svg>
  );
}

