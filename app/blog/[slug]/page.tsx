import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Mock blog post data (replace with Contentlayer data)
const blogPosts = {
  "modern-web-apps-nextjs-15": {
    title: "Building Modern Web Applications with Next.js 15",
    description: "Explore the latest features in Next.js 15 and learn how to build performant, scalable web applications with the App Router and React Server Components.",
    date: "2024-06-26",
    readTime: "8 min read",
    category: "Development",
    slug: "modern-web-apps-nextjs-15",
    content: `
# Building Modern Web Applications with Next.js 15

Next.js 15 introduces groundbreaking features that revolutionize how we build web applications. In this comprehensive guide, we'll explore the latest improvements and how they can enhance your development workflow.

## What's New in Next.js 15

The latest version brings significant improvements to performance, developer experience, and application architecture. Let's dive into the key features:

### 1. Enhanced App Router

The App Router has been significantly improved with better performance and more intuitive patterns. Server Components are now more efficient, and the overall developer experience is smoother.

### 2. Improved Performance

Next.js 15 introduces several performance optimizations:
- Faster build times
- Reduced bundle sizes
- Better caching strategies
- Optimized image loading

### 3. Better TypeScript Support

TypeScript integration has been enhanced with better type inference and improved error messages.

## Getting Started

To start a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
\`\`\`

This will create a new project with the latest features and best practices.

## Key Features to Explore

1. **Server Components**: Build faster, more efficient applications
2. **Streaming**: Improve perceived performance with streaming SSR
3. **Turbopack**: Faster development builds
4. **Image Optimization**: Better image handling and optimization

## Conclusion

Next.js 15 represents a significant step forward in web development. The improvements in performance, developer experience, and application architecture make it an excellent choice for modern web applications.

Start exploring these features today and see how they can improve your development workflow!
    `,
    author: {
      name: "Quinn Nguyen",
      avatar: "/api/placeholder/100/100",
      bio: "Full-stack developer passionate about modern web technologies"
    }
  }
};

const relatedPosts = [
  {
    title: "The Future of Frontend Development",
    description: "A deep dive into emerging trends and technologies.",
    date: "2024-06-20",
    category: "Technology",
    slug: "future-frontend-development"
  },
  {
    title: "Optimizing Performance in React Applications",
    description: "Learn advanced techniques for optimizing React apps.",
    date: "2024-06-15",
    category: "Performance",
    slug: "optimizing-react-performance"
  },
  {
    title: "TypeScript Best Practices for Large Projects",
    description: "Essential patterns for maintaining code quality.",
    date: "2024-06-05",
    category: "Development",
    slug: "typescript-best-practices"
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Get blog post data
  const blogPost = blogPosts[slug as keyof typeof blogPosts];

  if (!blogPost) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary">{blogPost.category}</Badge>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{blogPost.readTime}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              {new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {blogPost.description}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold">Q</span>
            </div>
            <div>
              <h3 className="font-semibold">{blogPost.author.name}</h3>
              <p className="text-sm text-muted-foreground">{blogPost.author.bio}</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="space-y-6 leading-relaxed">
                  {blogPost.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('# ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                          {paragraph.replace('# ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('## ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                          {paragraph.replace('## ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```\w*\n/, '').replace(/\n```/, '');
                      return (
                        <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">{code}</code>
                        </pre>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground">
                              {item.replace('- ', '')}
                            </li>
                          ))}
                        </ul>
                      );
                    } else if (paragraph.trim()) {
                      return (
                        <p key={index} className="text-muted-foreground">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <div key={post.slug} className="group">
                <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background to-muted/10 overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      <div className="text-3xl text-muted-foreground">📄</div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
                          Read →
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
} 