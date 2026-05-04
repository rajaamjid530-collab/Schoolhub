/** @type {import('next').NextConfig} */
const nextConfig = {
  // کلاؤڈ فلیر کی 25MB لیمیٹ کو حل کرنے کے لیے کوڈ سپلٹنگ (Code Splitting)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 20000000, // کسی بھی فائل کو 20MB سے بڑا نہیں ہونے دے گا
      };
    }
    return config;
  },
  // آؤٹ پٹ کو درست جگہ رکھنے کے لیے
  distDir: '.next',
};

export default nextConfig;
