import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectCard from "./ProjectCard";

export async function getRepositoryStars(user: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${user}/${repo}`, {
    cache: "force-cache",
  });
  const githubRepoData = await response.json();
  return githubRepoData?.stargazers_count;
}

async function getProjects() {
  const projectsDirectory = path.join(process.cwd(), "content", "projects");
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = await Promise.all(
    fileNames.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      const stargazers = await getRepositoryStars(data.user, data.repository);

      return {
        title: data.title,
        tech: data.technologies,
        user: data.user,
        repository: data.repository,
        stargazers: stargazers,
        description: content,
        imageUrl: data.imageUrl,
        link: data.link,
        status: data.status,
      };
    }),
  );

  return projects;
}

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section>
      <p className="pl-16 text-xl font-bold">Projects</p>
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-4 gap-6 mt-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            tech={project.tech}
            title={project.title}
            stargazers={project.stargazers}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
