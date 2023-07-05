/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: '/project',
                destination: '/projects',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
