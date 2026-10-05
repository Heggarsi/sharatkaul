import React from "react";
import headerLogo from "../../assets/images/regenerated_image_1791204494859.jpg";
import footerLogo from "../../assets/images/regenerated_image_1791204533956.jpg";

interface RKSLogoProps {
  className?: string;
  theme?: "dark" | "light" | "original";
  alt?: string;
}

export function RKSLogo({
  className = "h-14 w-auto object-contain",
  theme = "dark",
  alt = "RKS Consulting - Ideas | Strategy | Semiconductors",
}: RKSLogoProps) {
  const isOriginal = theme === "original" || theme === "light";
  const imageSrc = isOriginal ? footerLogo : headerLogo;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
