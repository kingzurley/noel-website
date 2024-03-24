"use client";

import { useState } from "react";
import { MenuItem } from "./MenuItem";

const menuItems = [
  { title: "Daily", link: "/" },
  { title: "Dive", link: "/dive" },
  { title: "Dress", link: "/dress" },
  { title: "Pilot", link: "/pilot" },
];

export const Menu = (): JSX.Element => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 bg-transparent bg-slate-100 sticky top-0 h-screen p-5">
      {menuItems.map((item, key) => {
        return (
          <button
            key={key}
            onClick={() => setActiveButtonIndex(key)}
            className={`${
              activeButtonIndex === key
                ? "bg-violet-400 text-white"
                : "bg-white text-black"
            } rounded-lg hover:bg-violet-400 duration-500`}
          >
            <MenuItem title={item.title} link={item.link} />
          </button>
        );
      })}
    </div>
  );
};
