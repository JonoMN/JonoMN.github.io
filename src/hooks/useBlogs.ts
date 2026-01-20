import { useState, useEffect } from 'react';
import { BlogMetadata } from '../types';
import frontMatter from 'front-matter';

export const useBlogs = (): { blogs: BlogMetadata[]; loading: boolean; error: Error | null } => {
  const [blogs, setBlogs] = useState<BlogMetadata[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Vite's import.meta.glob to dynamically import all markdown files as raw text
        const markdownModules = import.meta.glob('../blogs/*.md', { eager: true, query: '?raw' });
        const blogEntries = Object.entries(markdownModules);

        const loadedBlogs = blogEntries.map(([path, module]) => {
          const fileName = path.replace('../blogs/', '').replace('.md', '');
          const content = (module as { default: string }).default;
          const { attributes } = frontMatter(content);

          return {
            ...attributes,
            link: `/blog/${fileName}`,
          } as BlogMetadata;
        });

        setBlogs(loadedBlogs);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error occurred');
        setError(error);
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return { blogs, loading, error };
};
