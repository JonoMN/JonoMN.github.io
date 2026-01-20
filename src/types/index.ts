export interface BlogMetadata {
  title: string;
  date: string;
  desc: string;
  topics?: string;
}

export interface BlogPost extends BlogMetadata {
  content: string;
  slug: string;
}

export interface Project {
  name: string;
  link: string;
  image: string;
  topics: string;
  desc?: string;
}

export interface EducationCardProps {
  degree: string;
  major: string;
}

export interface ProjectCardProps {
  title: string;
  topics: string;
  link: string;
  image: string;
  height?: string;
  desc?: string;
}

export interface BlogCardProps {
  title: string;
  date: string;
  topics?: string;
  desc: string;
  link: string;
}

export interface MarkdownFile {
  path: string;
  name: string;
}
