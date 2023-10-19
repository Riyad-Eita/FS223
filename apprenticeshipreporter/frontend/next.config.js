/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		// AXIOS_BASEURL: "http://fs223.de:8080"
		// AXIOS_BASEURL: "http://stevenxmg.local:8080",
		AXIOS_BASEURL: "http://localhost:8080",
	},
	experimental: {
		serverActions: true,
		esmExternals: "loose",
	},
	webpack: (config) => {
		config.externals = [...config.externals, { canvas: "canvas" }];
		return config;
	},
};

module.exports = nextConfig;
