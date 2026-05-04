/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. آؤٹ پٹ ڈائریکٹری سیٹ کریں
  distDir: '.next',

  // 2. بڑی فائلوں کو چھوٹے حصوں میں توڑنے کا بہتر طریقہ
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000, // 10KB سے بڑی ہر چیز کو الگ کرو
        maxSize: 15000000, // کسی بھی فائل کو 15MB سے بڑا نہ ہونے دو
      };
    }
    return config;
  },

  // 3. سورس میپس (Source Maps) بند کریں تاکہ سائز کم رہے
  productionBrowserSourceMaps: false,
};

export default nextConfig;
