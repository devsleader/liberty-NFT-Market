import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          '2xl': '1320px',  // Max-width for screens 1400px+
          'xl': '1140px',   // Max-width for screens 1200px+
          'lg': '960px',    // Max-width for screens 992px+
          'md': '720px',    // Max-width for screens 768px+
          'sm': '540px',    // Max-width for screens 576px+
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
