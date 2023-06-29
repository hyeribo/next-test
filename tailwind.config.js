/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
        19: "76px",
        20: "80px",
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "20",
        "3xl": "22",
        "4xl": "28",
        "5xl": "32",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  purge: {
    safelist: [
      {
        pattern: /grid-cols-/,
      },
      {
        pattern: /grid-rows-/,
      },
    ],
  },
  plugins: [],
};
