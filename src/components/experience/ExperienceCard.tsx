"use client";

import LinkIcon from "@/icons/LinkIcon";
import { Experience } from "@/types/types";
import React from "react";

const ExperienceCard: React.FC<Experience> = ({
  title,
  company,
  year,
  tech,
  link,
  imageUrl,
  description,
}) => {
  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer flex justify-between items-start rounded-lg p-3 px-6 bg-background w-full transition-all duration-300 hover:bg-background-secondary"
    >
      <div className="flex flex-col items-center justify-center w-1/4">
        <p className="text-sm font-normal text-gray-600">{year}</p>
        {imageUrl && (
          <div className="w-24 h-24 flex-shrink-0 mb-4">
            <img
              src={imageUrl}
              alt="Experience Image"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-start w-3/4">
        <ExperienceHeader title={title} company={company} />
        <ExperienceDescription description={description} />
        <ExperienceTechList tech={tech} />
      </div>
    </div>
  );
};

const ExperienceHeader: React.FC<{
  title: string;
  company: string;
}> = ({ title, company }) => (
  <div className="flex justify-between items-center mb-3">
    <div className="flex items-center gap-2">
      <h3 className="text-xl font-semibold text-primary transition-all duration-300 group-hover:text-secondary">
        {title} - {company}
      </h3>
      <div className="text-primary transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-secondary">
        <LinkIcon size={14} />
      </div>
    </div>
  </div>
);

const ExperienceDescription: React.FC<{ description: string }> = ({
  description,
}) => <p className="text-sm mb-3 text-body">{description}</p>;

const ExperienceTechList: React.FC<{ tech: string[] }> = ({ tech }) => (
  <ul className="flex flex-wrap gap-4">
    {tech.map((technology, index) => (
      <li
        key={index}
        className="bg-opacity-10 bg-[#d9f99d] text-secondary font-bold text-sm px-4 py-1 rounded-xl shadow"
      >
        {technology}
      </li>
    ))}
  </ul>
);

export default ExperienceCard;
