import React from "react";

interface RKSLogoProps {
  className?: string;
  variant?: "full" | "emblem";
  theme?: "dark" | "light";
}

export function RKSLogo({
  className = "h-8 w-auto",
  variant = "full",
  theme = "dark",
}: RKSLogoProps) {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#FAFAF8" : "#0A1C33";
  const mutedColor = isDark ? "#969BA3" : "#66717D";
  const accentGold = "#C9A46C";

  if (variant === "emblem") {
    return (
      <svg
        viewBox="0 0 700 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RKS Consulting Emblem"
      >
        <defs>
          <linearGradient id="rksBlueEmblem" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* R */}
        <path d="M 60 40 L 98 40 L 98 185 L 60 185 Z" fill={primaryColor} />
        <path
          d="M 98 40 L 155 40 C 195 40 220 58 220 92 C 220 124 196 142 155 142 L 98 142 Z M 98 75 L 145 75 C 165 75 178 82 178 92 C 178 102 165 108 145 108 L 98 108 Z"
          fill={primaryColor}
          fillRule="evenodd"
        />
        <path d="M 140 130 L 220 185 L 165 185 L 105 140 Z" fill={primaryColor} />

        {/* K */}
        <path d="M 215 40 L 255 40 L 255 185 L 215 185 Z" fill={primaryColor} />
        <path
          d="M 370 40 L 268 112.5 L 370 185 L 324 185 L 235 112.5 L 324 40 Z"
          fill="url(#rksBlueEmblem)"
        />

        {/* S */}
        <path
          d="M 510 75 C 495 52 468 40 425 40 C 378 40 345 60 345 90 C 345 115 365 128 405 136 L 450 144 C 480 150 492 158 492 172 C 492 188 472 198 440 198 C 400 198 370 182 358 158 L 318 175 C 338 215 380 235 440 235 C 500 235 538 208 538 170 C 538 142 515 128 472 120 L 430 112 C 400 106 388 98 388 86 C 388 72 402 64 430 64 C 458 64 480 74 492 90 Z"
          fill={primaryColor}
        />

        {/* S Circuit Traces */}
        <g
          stroke="url(#rksBlueEmblem)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 515 100 L 565 100 L 600 75 L 645 75" />
          <path d="M 530 120 L 680 120" />
          <path d="M 515 140 L 565 140 L 600 165 L 645 165" />
        </g>

        {/* Nodes */}
        <circle cx="650" cy="75" r="9" fill="#38BDF8" />
        <circle cx="685" cy="120" r="9" fill="#38BDF8" />
        <circle cx="650" cy="165" r="9" fill="#38BDF8" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 800 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RKS Consulting Logo"
    >
      <defs>
        <linearGradient id="rksBlueGradComp" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* R */}
      <path d="M 120 70 L 164 70 L 164 215 L 120 215 Z" fill={primaryColor} />
      <path
        d="M 164 70 L 225 70 C 265 70 290 88 290 122 C 290 154 266 172 225 172 L 164 172 Z M 164 105 L 215 105 C 235 105 248 112 248 122 C 248 132 235 138 215 138 L 164 138 Z"
        fill={primaryColor}
        fillRule="evenodd"
      />
      <path d="M 210 160 L 290 215 L 235 215 L 175 170 Z" fill={primaryColor} />

      {/* K */}
      <path d="M 285 70 L 328 70 L 328 215 L 285 215 Z" fill={primaryColor} />
      <path
        d="M 445 70 L 340 142.5 L 445 215 L 398 215 L 305 142.5 L 398 70 Z"
        fill="url(#rksBlueGradComp)"
      />

      {/* S */}
      <path
        d="M 585 105 C 570 82 542 70 500 70 C 452 70 420 90 420 120 C 420 145 440 158 480 166 L 525 174 C 555 180 568 188 568 202 C 568 218 548 228 515 228 C 475 228 445 212 432 188 L 392 205 C 412 245 455 265 515 265 C 575 265 612 238 612 200 C 612 172 590 158 548 150 L 505 142 C 475 136 462 128 462 116 C 462 102 478 94 505 94 C 532 94 555 104 568 120 Z"
        fill={primaryColor}
      />

      {/* S Circuit Traces */}
      <g
        stroke="url(#rksBlueGradComp)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 590 130 L 640 130 L 675 105 L 720 105" />
        <path d="M 605 150 L 755 150" />
        <path d="M 590 170 L 640 170 L 675 195 L 720 195" />
      </g>

      {/* Nodes */}
      <circle cx="725" cy="105" r="10" fill="#38BDF8" />
      <circle cx="760" cy="150" r="10" fill="#38BDF8" />
      <circle cx="725" cy="195" r="10" fill="#38BDF8" />

      {/* CONSULTING TEXT */}
      <text
        x="400"
        y="290"
        fontFamily="'Space Grotesk', 'Inter', -apple-system, sans-serif"
        fontSize="34"
        fontWeight="700"
        fill={primaryColor}
        letterSpacing="14"
        textAnchor="middle"
      >
        CONSULTING
      </text>

      {/* SUBTITLE DIVIDER & TAGLINE */}
      <g transform="translate(0, 325)">
        <line x1="120" y1="5" x2="235" y2="5" stroke={mutedColor} strokeWidth="1.5" />
        <text
          x="400"
          y="10"
          fontFamily="'JetBrains Mono', 'Space Grotesk', monospace"
          fontSize="13"
          fontWeight="500"
          fill={accentGold}
          letterSpacing="4"
          textAnchor="middle"
        >
          IDEAS | STRATEGY | SEMICONDUCTORS
        </text>
        <line x1="565" y1="5" x2="680" y2="5" stroke={mutedColor} strokeWidth="1.5" />
      </g>
    </svg>
  );
}
