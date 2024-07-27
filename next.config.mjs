/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        return config;
    },
    experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongodb"],
    },
};

export default nextConfig;
