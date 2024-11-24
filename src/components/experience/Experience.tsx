"use client";
import React, { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [experiences, setExperiences] = useState([]); // Add type
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/api/experiences");
      const data = await response.json();
      setExperiences(data);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <p className="pl-16 text-xl font-bold">Work Experience</p>
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-4 gap-6 mt-4">
        {experiences.map((experience, index) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
