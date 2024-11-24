import GitHubIcon from "@/icons/GitHubIcon";
import GoodReadsIcon from "@/icons/GoodReadsIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import React from "react";

const SocialMediaBar = () => {
  const socialLinks = [
    {
      href: "https://github.com/your-profile",
      icon: <GitHubIcon size={28} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/your-profile",
      icon: <LinkedInIcon size={28} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.goodreads.com/your-profile",
      icon: <GoodReadsIcon size={28} />,
      label: "Goodreads",
    },
  ];

  return (
    <div className="flex gap-4 justify-center items-center my-5">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline transition-colors duration-300 hover:text-[#bef264]"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
