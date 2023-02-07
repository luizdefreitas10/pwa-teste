// /** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})

// module.exports = {
//   reactStrictMode: true,
// };

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     disable: process.env.NODE_ENV === "development",
//     skipWaiting: true,
//   },
// });
