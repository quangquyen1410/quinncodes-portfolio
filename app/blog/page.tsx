import { allBlogPosts, BlogPost } from 'contentlayer/generated';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-muted-foreground mb-8">Welcome to the blog! Posts are powered by Contentlayer and MDX.</p>
      <div className="space-y-8">
        {allBlogPosts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Stay tuned!</p>
        ) : (
          allBlogPosts.map((post: BlogPost) => (
            <article key={post.slug} className="border-b border-border pb-6">
              <Link href={post.url} className="text-2xl font-semibold hover:underline">
                {post.title}
              </Link>
              <div className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString()}</div>
              <p className="text-base text-muted-foreground">{post.description}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
} 