/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // 👈 required for static image rendering
      },
};

export default nextConfig;
