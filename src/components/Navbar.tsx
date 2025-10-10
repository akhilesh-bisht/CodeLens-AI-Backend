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
    <div className="w-full h-full  bg-gray-700">
      <div className="h-7 w-[1240px] mx-auto">
        <h1>SkillForge</h1>
        <div className="bg-white">
          {navLinks.map((link) => {
            return (
              <ul key={link.url} className="flex justify-evenly items-center">
                <li className="text-xl text-gray-400 hover:text-gray-600">
                  {link.name}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
