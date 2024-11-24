export interface Project {
  title: string;
  stargazers: number | undefined;
  description: string;
  imageUrl: string;
  tech: string[];
  link: string;
  status: string;
}

export interface Experience {
  title: string;
  company: string;
  year: string;
  tech: string[];
  link: string;
  imageUrl: string;
  description: string;
}
