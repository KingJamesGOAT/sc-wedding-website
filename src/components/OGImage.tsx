// This component generates the Open Graph preview image (1200x630px)
// with the couple's initials "SC" in an elegant serif font

export default function OGImage() {
  return (
    <svg
      width="1200"
      height="630"
      viewBox="0 0 1200 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background - Soft cream */}
      <rect width="1200" height="630" fill="#FAF7F2" />
      
      {/* Subtle floral details - Top left */}
      <g opacity="0.15">
        <circle cx="100" cy="80" r="40" fill="#D4B5A0" />
        <circle cx="140" cy="60" r="25" fill="#C9A88F" />
        <circle cx="80" cy="120" r="30" fill="#E5D4C8" />
      </g>
      
      {/* Subtle floral details - Bottom right */}
      <g opacity="0.15">
        <circle cx="1100" cy="550" r="45" fill="#D4B5A0" />
        <circle cx="1130" cy="510" r="30" fill="#C9A88F" />
        <circle cx="1060" cy="570" r="35" fill="#E5D4C8" />
      </g>
      
      {/* Decorative leaves/stems - subtle */}
      <g opacity="0.1">
        <path
          d="M 150 100 Q 180 120 200 150"
          stroke="#8B7355"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 1050 520 Q 1020 540 1000 570"
          stroke="#8B7355"
          strokeWidth="2"
          fill="none"
        />
      </g>
      
      {/* Main Initials - SC in elegant serif font */}
      <text
        x="600"
        y="350"
        fontSize="280"
        fontFamily="serif"
        fontWeight="300"
        textAnchor="middle"
        fill="#4A4038"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        SC
      </text>
      
      {/* Decorative ampersand or line under initials */}
      <line
        x1="450"
        y1="380"
        x2="750"
        y2="380"
        stroke="#C9A88F"
        strokeWidth="1.5"
        opacity="0.6"
      />
      
      {/* Names below */}
      <text
        x="600"
        y="440"
        fontSize="36"
        fontFamily="sans-serif"
        fontWeight="300"
        textAnchor="middle"
        fill="#6B5D52"
        letterSpacing="4"
      >
        STEVE & CYNTHIA
      </text>
      
      {/* Date */}
      <text
        x="600"
        y="490"
        fontSize="28"
        fontFamily="sans-serif"
        fontWeight="300"
        textAnchor="middle"
        fill="#8B7966"
        letterSpacing="2"
      >
        27 · 06 · 2026
      </text>
    </svg>
  );
}

// Function to convert SVG to data URL for meta tag
export function getOGImageDataURL(): string {
  const svgString = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#FAF7F2"/>
      <g opacity="0.15">
        <circle cx="100" cy="80" r="40" fill="#D4B5A0"/>
        <circle cx="140" cy="60" r="25" fill="#C9A88F"/>
        <circle cx="80" cy="120" r="30" fill="#E5D4C8"/>
      </g>
      <g opacity="0.15">
        <circle cx="1100" cy="550" r="45" fill="#D4B5A0"/>
        <circle cx="1130" cy="510" r="30" fill="#C9A88F"/>
        <circle cx="1060" cy="570" r="35" fill="#E5D4C8"/>
      </g>
      <g opacity="0.1">
        <path d="M 150 100 Q 180 120 200 150" stroke="#8B7355" stroke-width="2" fill="none"/>
        <path d="M 1050 520 Q 1020 540 1000 570" stroke="#8B7355" stroke-width="2" fill="none"/>
      </g>
      <text x="600" y="350" font-size="280" font-family="Playfair Display, Georgia, serif" font-weight="300" text-anchor="middle" fill="#4A4038">SC</text>
      <line x1="450" y1="380" x2="750" y2="380" stroke="#C9A88F" stroke-width="1.5" opacity="0.6"/>
      <text x="600" y="440" font-size="36" font-family="sans-serif" font-weight="300" text-anchor="middle" fill="#6B5D52" letter-spacing="4">STEVE & CYNTHIA</text>
      <text x="600" y="490" font-size="28" font-family="sans-serif" font-weight="300" text-anchor="middle" fill="#8B7966" letter-spacing="2">27 · 06 · 2026</text>
    </svg>
  `;
  
  return `data:image/svg+xml,${encodeURIComponent(svgString)}`;
}
