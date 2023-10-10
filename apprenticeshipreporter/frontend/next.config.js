/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
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
