module.exports = {
    reactStrictMode: true,
    swcMinify: true,

    // Please comment/uncomment the following code when opening/closing preregistration.
    async redirects() {
        return [
            {
                source: '/pre-register',
                destination: '/register',
                permanent: true,
            },
        ]
    },
}
