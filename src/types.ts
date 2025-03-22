export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}