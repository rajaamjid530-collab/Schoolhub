/** @type {import('next').NextConfig} */
const nextConfig = {
  // سورس میپس بند کریں تاکہ فائل کا سائز کم ہو سکے
  productionBrowserSourceMaps: false,
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // فائلز کو زبردستی چھوٹے ٹکڑوں میں تقسیم کرنے کا کوڈ
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 15000000, // کسی بھی ٹکڑے کو 15MB سے بڑا نہیں ہونے دے گا
      };
    }
    return config;
  },
  // آؤٹ پٹ ڈائریکٹری
  distDir: '.next',
};

export default nextConfig;
