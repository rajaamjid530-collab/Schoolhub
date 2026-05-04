/** @type {import('next').NextConfig} */
const nextConfig = {
  // یہ لائن فائلز کو چھوٹے ٹکڑوں میں تقسیم کرے گی تاکہ 25MB سے زیادہ نہ ہوں
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 20000000, // 20MB کی لیمیٹ سیٹ کر دی
      };
    }
    return config;
  },
  // اگر آؤٹ پٹ ڈائریکٹری کا مسئلہ ہو تو یہ بھی کام آتا ہے
  distDir: '.next',
};

export default nextConfig;
