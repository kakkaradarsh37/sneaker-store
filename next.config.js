/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com"],//here we have add the link of the image domain here
    },
};

module.exports = nextConfig;
