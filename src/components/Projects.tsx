import fs from "fs";
import path from "path";
import matter from "gray-matter";

import ProjectCard from "./ProjectCard";

// const projects: Project[] = [
//   {
//     year: "2023",
//     title: "Awesome Project",
//     stars: 1200,
//     description:
//       "A project that does awesome things with React and Tailwind CSS.",
//     link: "https://github.com/your-username/awesome-project",
//   },
//   {
//     year: "2022",
//     title: "Cool Tool",
//     stars: 890,
//     description: "A cool tool that improves productivity.",
//     link: "https://github.com/your-username/cool-tool",
//   },
//   {
//     year: "2021",
//     title: "Utility Library",
//     stars: 560,
//     description: "A utility library to make development easier.",
//     link: "https://github.com/your-username/utility-library",
//   },
// ];

const Projects = async () => {
  const getProjects = async () => {
    const projectsDirectory = path.join(process.cwd(), "content", "projects");
    const fileNames = fs.readdirSync(projectsDirectory);

    const projects = await Promise.all(
      fileNames.map(async (filename) => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);
        return {
          title: data.title,
          tech: data.technologies,
          github: data.github,
          description: content,
        };
      })
    );

    return projects;
  };

  const projects = await getProjects();

  return (
    <section>
      <h2 className="text-6xl font-bold">Projects</h2>
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            tech={project.tech}
            title={project.title}
            stars={5}
            description={project.description}
            link={"hi"}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
