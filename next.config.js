/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    //insert with MALCO URL or USE TMDB for quality pic's (NEXT.JS optimizes pictures)
    domains: ['image.tmdb.org', 'https://image.tmdb.org/t/p/w500$', 'rb.gy'],
  },
}
