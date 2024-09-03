import flowbite from "flowbite/plugin";
import flowbiteTypography from "flowbite-typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
    flowbiteTypography, // Add Flowbite Typography as a plugin
  ],
};
