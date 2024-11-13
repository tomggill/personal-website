import StarIcon from "@/icons/StarIcon";
import { Project } from "@/types/types";
import React from "react";

const ProjectCard: React.FC<Project> = ({
  title,
  stars,
  description,
  link,
  tech,
}) => {
  return (
    <div className="border rounded-lg p-3 px-6 bg-background w-full">
      <div className="flex justify-between items-center py-2">
        <h3 className="text-xl font-semibold mt-0">{title}</h3>
        <div className="flex items-center text-sm text-gray-400">
          <span className="mr-2">{stars}</span>
          <StarIcon />
        </div>
      </div>
      <div className="text-gray-400 py-2">
        <p className="text-sm">{description}</p>
      </div>
      <div className="py-2">
        <ul className="flex gap-4 list-none">
          {tech.map((technology, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center bg-opacity-10 text-sm bg-[#d9f99d] text-[#bef264] font-bold px-4 py-1 rounded-xl shadow"
              >
                {technology}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        View Project
      </a> */
}
