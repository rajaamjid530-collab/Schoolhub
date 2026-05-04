/** @type {import('next').NextConfig} */
const nextConfig = {
  // یہ سیٹنگ فائلز کو بہت چھوٹے حصوں میں تقسیم کر دے گی
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 15000000, // 15MB سے بڑی فائل نہیں بننے دے گا
      };
    }
    return config;
  },
  // کلاؤڈ فلیر کے لیے مخصوص آؤٹ پٹ سیٹنگ
  output: 'standalone', 
};

export default nextConfig;
