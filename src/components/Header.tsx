import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="pl-16">
      <div className="flex items-center space-x-8">
        <div className="relative w-24 h-24">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="space-y-2">
          <p className="text-6xl font-bold text-primary">Tom Gill</p>
          <p className="text-2xl text-primary">Software Engineer</p>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <p className="text-xl font-bold text-primary">About</p>
        <p className="text-base font-normal text-body">
          Hey! I’m Tom, a software engineer at the start of my journey,
          dedicated to building tools that make developers’ lives easier. I
          thrive on solving problems, simplifying workflows, and constantly
          expanding my knowledge to stay ahead in the ever-evolving tech
          landscape.
        </p>
      </div>
    </div>
  );
};

export default Header;
