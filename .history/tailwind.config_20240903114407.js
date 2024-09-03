const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Add Flowbite as a plugin
  ],
};
