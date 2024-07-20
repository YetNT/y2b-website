/** @type {import('next').NextConfig} */
const nextConfig = {
    async exportPathMap(defaultPathMap) {
        // Filter out the API routes
        const filteredPathMap = Object.keys(defaultPathMap)
            .filter((path) => !path.startsWith("/api"))
            .reduce((acc, path) => {
                acc[path] = defaultPathMap[path];
                return acc;
            }, {});

        return filteredPathMap;
    },
};

export default nextConfig;
