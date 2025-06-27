"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

// Mock blog posts data (replace with Contentlayer data)
const blogPosts = [
  {
    title: "Building Modern Web Applications with Next.js 15",
    description: "Explore the latest features in Next.js 15 and learn how to build performant, scalable web applications with the App Router and React Server Components.",
    date: "2024-06-26",
    readTime: "8 min read",
    category: "Development",
    slug: "modern-web-apps-nextjs-15",
    featured: true
  },
  {
    title: "The Future of Frontend Development",
    description: "A deep dive into emerging trends, new technologies, and best practices that are shaping the future of frontend development.",
    date: "2024-06-20",
    readTime: "12 min read",
    category: "Technology",
    slug: "future-frontend-development",
    featured: false
  },
  {
    title: "Optimizing Performance in React Applications",
    description: "Learn advanced techniques for optimizing React applications, from code splitting to memoization and beyond.",
    date: "2024-06-15",
    readTime: "10 min read",
    category: "Performance",
    slug: "optimizing-react-performance",
    featured: false
  },
  {
    title: "Design Systems: From Theory to Implementation",
    description: "How to build and maintain effective design systems that scale with your product and team.",
    date: "2024-06-10",
    readTime: "15 min read",
    category: "Design",
    slug: "design-systems-implementation",
    featured: false
  },
  {
    title: "TypeScript Best Practices for Large Projects",
    description: "Essential TypeScript patterns and practices that help maintain code quality in large-scale applications.",
    date: "2024-06-05",
    readTime: "14 min read",
    category: "Development",
    slug: "typescript-best-practices",
    featured: false
  },
  {
    title: "The Art of Code Review",
    description: "Effective code review strategies that improve code quality, team collaboration, and knowledge sharing.",
    date: "2024-06-01",
    readTime: "6 min read",
    category: "Process",
    slug: "art-of-code-review",
    featured: false
  }
];

const categories = ["All", "Development", "Technology", "Performance", "Design", "Process"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Thoughts, tutorials, and insights on modern web development, 
            design, and the latest technologies.
          </motion.p>
        </div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.filter(p => p.featured).length > 0 && (
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            {filteredPosts.filter(p => p.featured).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20 overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-6xl text-muted-foreground">📝</div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                          Read More →
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.section>
        )}

        {/* All Posts Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          {filteredPosts.length === 0 ? (
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.filter(p => !p.featured).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background to-muted/10 overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                        <div className="text-4xl text-muted-foreground">📄</div>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
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
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </motion.div>
    </div>
  );
} 