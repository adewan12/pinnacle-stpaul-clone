import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/about/:path*', destination: 'https://pinnaclemontessori.com/main/about/:path*', permanent: false },
      { source: '/programs/:path*', destination: 'https://pinnaclemontessori.com/main/our-programs/:path*', permanent: false },
      { source: '/curriculum/:path*', destination: 'https://pinnaclemontessori.com/main/curriculum/:path*', permanent: false },
      { source: '/parent-info/:path*', destination: 'https://pinnaclemontessori.com/main/parent-info/:path*', permanent: false },
      { source: '/gallery/:path*', destination: 'https://pinnaclemontessori.com/main/gallery/:path*', permanent: false },
      { source: '/careers/:path*', destination: 'https://pinnaclemontessori.com/main/careers/:path*', permanent: false },
      { source: '/send-feedback/:path*', destination: 'https://pinnaclemontessori.com/main/send-feedback/:path*', permanent: false },
      { source: '/contact-us/:path*', destination: 'https://pinnaclemontessori.com/main/contact-us/:path*', permanent: false },
    ];
  },
};

export default nextConfig;