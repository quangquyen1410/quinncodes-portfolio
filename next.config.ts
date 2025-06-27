import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  output: 'standalone' as const, // Enable standalone build for Vercel deployment
};

export default withContentlayer(nextConfig);
