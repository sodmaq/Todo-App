import flowbite from "flowbite/plugin";
import flowbiteTypography from "flowbite-typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
    flowbiteTypography, // Add Flowbite Typography as a plugin
  ],
};
