import React from "react";

export default function CRTScreen({ children, className = "", style = {} }) {
  const SCREEN_CLIP = "polygon(5% 2%, 95% 3.2%, 98% 98%, 2% 100%)";

  return (
    <div className={`relative ${className}`} style={style}>
      <div
        className="absolute inset-0 crt-flicker"
        style={{
          backgroundColor: "#050505",
          borderRadius: "14px",
          overflow: "hidden",

       transform:
  "perspective(1000px) rotateX(1.4deg) rotateY(-6.5deg) rotateZ(-0.6deg) translateY(-2px)",

          transformOrigin: "center center",
          clipPath: SCREEN_CLIP,
        }}
      >
        {/* Content */}
        <div className="relative z-10 w-full h-full">{children}</div>

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-20 crt-scanlines"
          style={{
            background: `
              repeating-linear-gradient(
                to bottom,
                rgba(255,255,255,0.06),
                rgba(255,255,255,0.06) 1px,
                transparent 1px,
                transparent 4px
              )
            `,
            opacity: 0.22,
          }}
        />

        {/* Glass */}
        <div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            borderRadius: "14px",
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 50%),
              radial-gradient(circle at 50% 120%, rgba(255, 255, 150, 0.16) 0%, transparent 60%)
            `,
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)",
          }}
        />
      </div>
    </div>
  );
}
