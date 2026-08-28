/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm beige base - page background and elevated surfaces.
        base: {
          950: "#e8dfc8",
          900: "#f3ede0",
          850: "#fbf8f1",
          800: "#e9e0cc",
          700: "#d8cbae",
        },
        // Deep forest-green-charcoal text on the beige backgrounds.
        ink: {
          100: "#1f2e23",
          300: "#3c4f3f",
          500: "#6b7a6c",
          700: "#a3ac9c",
        },
        // Primary accent - deep forest green gradient family.
        brand: {
          violet: "#1b4332",
          indigo: "#2d6a4f",
          blue: "#40916c",
          cyan: "#74c69d",
        },
        accent: {
          // Kept as a visibly different hue from the deep-forest brand
          // green so "online/success" doesn't visually blend into every
          // brand-colored button and accent on the page.
          success: "#52b788",
          warning: "#c9a227",
          danger: "#b33a3a",
        },
        // Neo-Apple palette for the auth flow - unified with the same
        // dark green/beige identity. Blob colors are soft sage/beige
        // tones with enough weight to read against the beige page.
        neo: {
          void: "#f3ede0",
          charcoal: "#fbf8f1",
          ember: "#95b8a6",
          amber: "#d8cbae",
          rust: "#6b8f7a",
          paper: "#1f2e23",
          smoke: "#6b7a6c",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        neo: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
        "aurora": "radial-gradient(60% 60% at 20% 20%, rgba(64,145,108,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(216,203,174,0.3) 0%, transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(27,67,50,0.12) 0%, transparent 60%)",
        "neo-gradient": "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
        "neo-lava": "radial-gradient(45% 45% at 25% 30%, rgba(149,184,166,0.5) 0%, transparent 70%), radial-gradient(40% 40% at 75% 65%, rgba(216,203,174,0.5) 0%, transparent 70%), radial-gradient(50% 50% at 50% 100%, rgba(107,143,122,0.35) 0%, transparent 70%)",
      },
      boxShadow: {
        // Claymorphism signature: a soft light highlight (upper-left) paired
        // with a deeper, warm-toned shadow (lower-right) - this dual-shadow
        // pairing is what makes a surface read as "puffy soft clay" rather
        // than a flat card with a plain drop shadow underneath it.
        glass: "-6px -6px 16px rgba(255,255,255,0.6), 8px 10px 24px rgba(43,51,40,0.16)",
        "glow-violet": "-4px -4px 12px rgba(255,255,255,0.5), 6px 8px 20px rgba(27,67,50,0.28)",
        "glow-ember": "-4px -4px 12px rgba(255,255,255,0.5), 6px 8px 20px rgba(27,67,50,0.28)",
        // "Pressed in" inset shadow for input fields - the claymorphism
        // convention where buttons/cards read as raised and inputs read
        // as gently pressed into the clay surface.
        "clay-inset": "inset 3px 3px 8px rgba(43,51,40,0.10), inset -2px -2px 6px rgba(255,255,255,0.5)",
      },
      backdropBlur: { xs: "2px" },
      borderRadius: {
        xl2: "1.5rem",
        squircle: "2.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "blob-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "blob-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-35px, 30px) scale(1.1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "blob-1": "blob-drift-1 14s ease-in-out infinite",
        "blob-2": "blob-drift-2 18s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
