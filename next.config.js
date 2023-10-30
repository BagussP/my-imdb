/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: false,
});

module.exports = withPWA({
  // next.js config
});