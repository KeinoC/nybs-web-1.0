import React from "react";

const letters = ["N", "Y", "|", "B", "E", "A", "U", "T", "Y"];

const Logo = ({ size = 320, textColor = "#222", className }: { size?: number; textColor?: string, className?: string }) => {
  // Helper for mirrored B
  const mirroredB = (
    <span style={{ display: "inline-block", transform: "scaleX(-1)", fontFamily: 'Montserrat, Arial, sans-serif' }}>B</span>
  );

  const  tagline = (
    <div className="text-2xl font-bold mt-4 rounded-full bg-gray-800/50 px-8 py-1 dark:bg-charcoal  text-yellow-600 text-center  italic ">
     <p className="text-center  -rotate-12">flex</p>
      </div>
  )

  return (
    <div
      style={{ width: size, display: "flex", flexDirection: "column", alignItems: "center" }}
      className={`select-none  ${className}`}
    >
      {/* Purple square with circle */}
      <svg width={size / 2.5} height={size / 2.5} viewBox="0 0 80 80" style={{ marginBottom: size / 16 }}>
        <rect x="10" y="10" width="60" height="60" rx="8" stroke="#C47DD9" strokeWidth="4" fill="none" />
        <circle cx="40" cy="40" r="18" stroke="#C47DD9" strokeWidth="4" fill="none" />
      </svg>
      {/* Main text with dividers and mirrored B */}
      <div
        style={{
          background: "",
          padding: `${size / 32}px ${size / 16}px`,
          borderRadius: size / 48,
          display: "flex",
          alignItems: "center",
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontWeight: 500,
          fontSize: size / 8,
          letterSpacing: "0.18em",
          color: textColor,
        }}
      >
        <span style={{ margin: `0 ${size / 48}px` }}>N</span>
        <span style={{ margin: `0 ${size / 48}px` }}>Y</span>
        <span
          style={{
            width: 2,
            height: size / 7,
            background: textColor,
            opacity: 0.4,
            margin: `0 ${size / 48}px`,
            display: "inline-block",
            borderRadius: 2,
          }}
        />
        <span style={{ margin: `0 ${size / 48}px` }}>{mirroredB}</span>
        <span style={{ margin: `0 ${size / 48}px` }}>E</span>
        <span style={{ margin: `0 ${size / 48}px` }}>A</span>
        <span style={{ margin: `0 ${size / 48}px` }}>U</span>
        <span style={{ margin: `0 ${size / 48}px` }}>T</span>
        <span style={{ margin: `0 ${size / 48}px` }}>Y</span>
      </div>
      {/* suites text */}
      <div className="flex relative flex-col items-center justify-center">
      <div
        style={{
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: size / 12,
          letterSpacing: "0.4em",
          color: textColor,
          opacity: 0.5,
          marginTop: size / 18,
        }}
      >
        suites
      </div>
      {tagline}
      </div>
    </div>
  );
};

export default Logo;

