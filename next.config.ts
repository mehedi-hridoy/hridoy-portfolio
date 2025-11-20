const nextConfig = {
  // Silence root inference warning by pinning project root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
