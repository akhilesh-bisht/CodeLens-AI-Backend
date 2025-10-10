import React from "react";

type navLinks = {
  name: string;
  url: string;
};

const navLinks: navLinks[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "contact",
    url: "/contact",
  },
];

export const Navbar = () => {
  return (
    <div className="w-[1240px] mx-auto h-7 bg-green-400">
      <h1>SkillForge</h1>
      <div className="bg-red-600 ">
        {navLinks.map((link) => {
          return (
            <ul key={link.url} className="flex justify-evenly items-center">
              <li>{link.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
