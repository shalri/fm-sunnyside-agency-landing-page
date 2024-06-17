import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "ss-soft-red": "hsl(7, 99%, 70%)",
        "ss-yellow": "hsl(51, 100%, 49%)",
        "ss-dark-desaturated-cyan": "hsl(167, 40%, 24%)", // (graphic design text)
        "ss-dark-blue": "hsl(198, 62%, 26%)", // (photography text)
        "ss-dark-moderate-cyan": "hsl(168, 34%, 41%)", // (footer)
        // Neutral
        "ss-very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "ss-very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "ss-dark-grayish-blue": "hsl(232, 10%, 55%)",
        "ss-grayish-blue": "hsl(210, 4%, 67%)",
        "ss-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        body: "18px",
      },
      fontWeight: {
        normal: "600",
        semibold: "700",
        bold: "900",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
