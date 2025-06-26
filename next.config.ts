import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  output: 'export' as const, // Enable static site generation'
};

export default withContentlayer(nextConfig);
