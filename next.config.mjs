/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 15000000, // یہ فائلوں کو 15MB کے ٹکڑوں میں بانٹ دے گا
      };
    }
    return config;
  },
};

export default nextConfig;
