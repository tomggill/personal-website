"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]); // Add type
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <p className="pl-16 text-xl font-bold text-primary">Projects</p>
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-4 gap-6 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-full transition-opacity duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-40"
                : "opacity-100"
            }`}
          >
            <ProjectCard
              key={index}
              tech={project.tech}
              title={project.title}
              stargazers={project.stargazers}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              status={project.status}
              isDimmed={hoveredIndex !== null && hoveredIndex !== index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
