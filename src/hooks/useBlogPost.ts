import { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import frontMatter from 'front-matter';

export const useBlogPost = (slug: string): { post: BlogPost | null; loading: boolean; error: Error | null } => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Vite's import.meta.glob with eager loading
        const blogModules = import.meta.glob('../blogs/*.md', { eager: true, query: '?raw' });
        const blogPath = `../blogs/${slug}.md`;
        const blogModule = blogModules[blogPath] as { default: string } | undefined;
        
        if (!blogModule) {
          throw new Error(`Blog post not found: ${slug}`);
        }
        
        const text = blogModule.default;
        const { attributes, body } = frontMatter(text);

        setPost({
          ...attributes,
          content: body,
          slug,
        } as BlogPost);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error occurred');
        setError(error);
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlogPost();
    }
  }, [slug]);

  return { post, loading, error };
};
