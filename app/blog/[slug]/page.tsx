import { allBlogPosts, BlogPost } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/ui/mdx-content';

export async function generateStaticParams() {
  return allBlogPosts.map((post: BlogPost) => ({ slug: post.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const post = allBlogPosts.find((post: BlogPost) => post.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
      <div className="mb-6 text-muted-foreground text-sm">{new Date(post.date).toLocaleDateString()}</div>
      <MDXContent code={post.body.code} />
    </article>
  );
} 