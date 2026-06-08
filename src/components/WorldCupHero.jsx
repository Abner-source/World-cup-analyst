import { useRef } from "react";

export default function WorldCupHero({ onExplore }) {
  const scrollRef = useRef(null);

  return (
    <div style={{
      width: "100%",
      height: "95vh",
      background: "var(--bg)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif",
      borderBottom: "1px solid var(--border)"
    }}>
      {/* Background Collage Watermark */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/untitled_collage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.22,
        filter: "grayscale(100%) contrast(1.1) brightness(1.02)",
        pointerEvents: "none",
        zIndex: 0,
        WebkitMaskImage: "radial-gradient(circle at center, black 45%, rgba(0,0,0,0.3) 85%, transparent 100%)",
        maskImage: "radial-gradient(circle at center, black 45%, rgba(0,0,0,0.3) 85%, transparent 100%)"
      }} />

      {/* CSS keyframe animations for the orbit rings, text, particles, and logo components */}
      <style>{`
        @keyframes orbitGold {
          0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.03); opacity: 0.6; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
        }
        @keyframes orbitGreen {
          0% { transform: rotate(360deg) scale(1.05); opacity: 0.2; }
          50% { transform: rotate(180deg) scale(1); opacity: 0.5; }
          100% { transform: rotate(0deg) scale(1.05); opacity: 0.2; }
        }
        @keyframes scrollBlink {
          0% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(6px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.4; }
        }
        @keyframes particleRotate {
          0% { transform: rotate(0deg) translate(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(80px) rotate(-360deg); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 2026 Logo Component Assembly Animations */
        @keyframes canadaIn {
          0% { opacity: 0; transform: translate(-30px, -30px) scale(0.5) rotate(-30deg); }
          100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        @keyframes mexicoIn {
          0% { opacity: 0; transform: translate(30px, -30px) scale(0.5) rotate(30deg); }
          100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        @keyframes usaIn {
          0% { opacity: 0; transform: translate(0, 30px) scale(0.5); }
          100% { opacity: 1; transform: translate(0, 0) scale(1); }
        }
        @keyframes stemLeftIn {
          0% { opacity: 0; transform: translate(-40px, 20px) rotate(-20deg); }
          100% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes stemRightIn {
          0% { opacity: 0; transform: translate(40px, 20px) rotate(20deg); }
          100% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes baseIn {
          0% { opacity: 0; transform: translateY(30px) scaleX(0.4); }
          100% { opacity: 1; transform: translateY(0) scaleX(1); }
        }
        @keyframes logoAssemble {
          0% { transform: scale(0.85); filter: drop-shadow(0 0 0px rgba(181, 140, 47, 0)); }
          65% { transform: scale(1.05); filter: drop-shadow(0 0 25px rgba(181, 140, 47, 0.65)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(181, 140, 47, 0.25)); }
        }
        @keyframes logoPulse {
          0% { filter: drop-shadow(0 0 10px rgba(181, 140, 47, 0.25)); }
          50% { filter: drop-shadow(0 0 20px rgba(181, 140, 47, 0.55)); }
          100% { filter: drop-shadow(0 0 10px rgba(181, 140, 47, 0.25)); }
        }
        @keyframes textBannerIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Orbit Rings (Gold and Green Hints) */}
      <div style={{
        position: "absolute",
        width: 320,
        height: 320,
        borderRadius: "50%",
        border: "1.5px dashed var(--accent)",
        animation: "orbitGold 12s linear infinite",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        width: 360,
        height: 360,
        borderRadius: "50%",
        border: "1.5px solid var(--accent2)",
        animation: "orbitGreen 18s linear infinite",
        zIndex: 0
      }} />

      {/* Orbiting particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: i % 2 === 0 ? "var(--accent)" : "var(--accent2)",
            animation: "particleRotate 10s linear infinite",
            animationDelay: `${i * 2}s`,
            zIndex: 0
          }}
        />
      ))}

      {/* Center 2026 Logo Visual */}
      <div style={{
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Animated Trophy Logo Container */}
        <div style={{
          animation: "logoAssemble 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2.0s both, logoPulse 4s ease-in-out infinite 3.5s",
          marginBottom: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 230
        }}>
          <svg width="180" height="230" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Logo head containing Canada, Mexico, US sections */}
            <g style={{ transformOrigin: "100px 75px" }}>
              {/* Top Left - Canada (Red) */}
              <path 
                d="M 100 20 A 45 45 0 0 0 55 65 C 70 75 85 75 100 68 C 96 52 96 36 100 20 Z" 
                fill="#E2231A" 
                stroke="var(--bg)" 
                strokeWidth="4" 
                strokeLinejoin="round"
                style={{
                  transformOrigin: "100px 75px",
                  animation: "canadaIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both"
                }}
              />
              {/* Maple leaf inside Canada segment */}
              <path 
                d="M 78 36 L 80 40 L 83 39 L 81 43 L 84 45 L 80 46 L 81 50 L 78 48 L 75 50 L 76 46 L 72 45 L 75 43 L 73 39 L 76 40 Z" 
                fill="#FFFFFF"
                style={{
                  transformOrigin: "78px 45px",
                  animation: "canadaIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s both"
                }}
              />

              {/* Top Right - Mexico (Green) */}
              <path 
                d="M 100 20 C 104 36 104 52 100 68 C 115 75 130 75 145 65 A 45 45 0 0 0 100 20 Z" 
                fill="#006847" 
                stroke="var(--bg)" 
                strokeWidth="4" 
                strokeLinejoin="round"
                style={{
                  transformOrigin: "100px 75px",
                  animation: "mexicoIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s both"
                }}
              />
              {/* Red/White concentric rings inside Mexico segment */}
              <circle 
                cx="122" 
                cy="45" 
                r="9" 
                fill="#FFFFFF"
                style={{
                  transformOrigin: "122px 45px",
                  animation: "mexicoIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s both"
                }}
              />
              <circle 
                cx="122" 
                cy="45" 
                r="5.5" 
                fill="#E2231A"
                style={{
                  transformOrigin: "122px 45px",
                  animation: "mexicoIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.65s both"
                }}
              />
              <circle 
                cx="122" 
                cy="45" 
                r="2.5" 
                fill="#006847"
                style={{
                  transformOrigin: "122px 45px",
                  animation: "mexicoIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.7s both"
                }}
              />

              {/* Bottom - USA (Blue) */}
              <path 
                d="M 55 65 C 70 75 85 75 100 68 C 115 75 130 75 145 65 A 45 45 0 0 1 55 65 Z" 
                fill="#002868" 
                stroke="var(--bg)" 
                strokeWidth="4" 
                strokeLinejoin="round"
                style={{
                  transformOrigin: "100px 75px",
                  animation: "usaIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s both"
                }}
              />
              {/* Star inside USA segment */}
              <polygon 
                points="100,79 102,85 108,85 103,89 105,95 100,91 95,95 97,89 92,85 98,85" 
                fill="#FFFFFF"
                style={{
                  transformOrigin: "100px 88px",
                  animation: "usaIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s both"
                }}
              />
            </g>

            {/* Trophy Stem & Base */}
            <g style={{ transformOrigin: "100px 160px" }}>
              {/* Left Stem wing (Dark Blue) */}
              <path 
                d="M 72 105 Q 86 110 88 125 Q 92 165 82 210 L 70 210 Q 82 160 72 105 Z" 
                fill="#0A2342" 
                stroke="var(--bg)" 
                strokeWidth="3" 
                strokeLinejoin="round"
                style={{
                  transformOrigin: "100px 160px",
                  animation: "stemLeftIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s both"
                }}
              />
              {/* Right Stem wing (Red) */}
              <path 
                d="M 128 105 Q 114 110 112 125 Q 108 165 118 210 L 130 210 Q 118 160 128 105 Z" 
                fill="#E2231A" 
                stroke="var(--bg)" 
                strokeWidth="3" 
                strokeLinejoin="round"
                style={{
                  transformOrigin: "100px 160px",
                  animation: "stemRightIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.4s both"
                }}
              />
              {/* Bottom Base (Green) */}
              <path 
                d="M 69 210 Q 100 216 131 210 L 129 218 Q 100 224 71 218 Z" 
                fill="#006847" 
                stroke="var(--bg)" 
                strokeWidth="2" 
                strokeLinejoin="round"
                style={{
                  transformOrigin: "100px 215px",
                  animation: "baseIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.7s both"
                }}
              />
            </g>
          </svg>
        </div>

        {/* Text Presentation / Brand Banner */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "textBannerIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.5s both"
        }}>
          <div style={{
            fontSize: 18,
            fontWeight: 600,
            color: "var(--text2)",
            letterSpacing: "0.15em",
            marginBottom: 6
          }}>
            2026
          </div>
          
          <h1 style={{
            fontSize: 48,
            fontWeight: 800,
            color: "var(--white)",
            letterSpacing: "0.02em",
            textAlign: "center",
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 8
          }}>
            WORLD CUP <span style={{ color: "var(--accent)" }}>ANALYST</span>
          </h1>

          <div style={{
            fontSize: 10,
            fontWeight: 600,
            color: "var(--text3)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 20
          }}>
            <span>UNITED STATES</span>
            <span style={{ color: "var(--accent)" }}>|</span>
            <span style={{ color: "var(--accent2)" }}>CANADA</span>
            <span style={{ color: "var(--accent)" }}>|</span>
            <span style={{ color: "var(--red)" }}>MÉXICO</span>
          </div>

          <div style={{
            fontSize: 14,
            color: "var(--text2)",
            textAlign: "center",
            maxWidth: 440,
            lineHeight: 1.6
          }}>
            48 qualified nations. 10,000 algorithmic simulations. The ultimate predictive dashboard.
          </div>
        </div>
      </div>

      {/* Scroll Down CTA */}
      <div
        onClick={onExplore}
        style={{
          position: "absolute",
          bottom: "6%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1,
          animation: "textBannerIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 3.2s both"
        }}
      >
        <span style={{
          fontSize: 10,
          fontWeight: 600,
          color: "var(--text3)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: 12
        }}>
          SCROLL TO PREDICTIONS
        </span>
        
        {/* Mouse/Scroll Indicator */}
        <div style={{
          width: 22,
          height: 36,
          borderRadius: 12,
          border: "2px solid var(--border2)",
          display: "flex",
          justifyContent: "center",
          paddingTop: 6
        }}>
          <div style={{
            width: 4,
            height: 8,
            borderRadius: 2,
            background: "var(--accent)",
            animation: "scrollBlink 1.5s ease-in-out infinite"
          }} />
        </div>
      </div>
    </div>
  );
}
