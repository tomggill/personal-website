import React, { useEffect } from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";

async function getExperience() {
  const experienceDirectory = path.join(process.cwd(), "content", "experience");
  const fileNames = fs.readdirSync(experienceDirectory);

  const experiences = await Promise.all(
    fileNames.map(async (filename) => {
      const filePath = path.join(experienceDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        title: data.title,
        company: data.company,
        year: data.year,
        tech: data.technologies,
        link: data.link,
        imageUrl: data.imageUrl,
        description: content,
      };
    })
  );

  return experiences;
}

const Experience = async () => {
  const experiences = await getExperience();

  return (
    <section>
      <p className="pl-16 text-xl font-bold">Work Experience</p>
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-4 gap-6 mt-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            year={experience.year}
            tech={experience.tech}
            link={experience.link}
            imageUrl={experience.imageUrl}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
