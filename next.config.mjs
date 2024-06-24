/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['image.tmdb.org'],     // depricated
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
