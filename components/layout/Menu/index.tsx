import React from "react";
import Link from "next/link";
import { HomeIcon } from "@/components/assets/HomeIcon";
import { InfoIcon } from "@/components/assets/InfoIcon";
import { BriefCaseIcon } from "@/components/assets/BriefCaseIcon";
import { SocialBlock } from "@/components/social-block";
import { CancelIcon } from "@/components/assets/CancelIcon";

const links = [
  {
    id: 1,
    link: "home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    link: "about",
    href: "#about",
    icon: <InfoIcon />,
  },
  {
    id: 3,
    link: "portfolio",
    href: "#portfolio",
    icon: <BriefCaseIcon />,
  },
];

export const Menu = () => {
  return (
    <div className="fixed z-20 top-0  w-full right-0 bottom-0 lg:backdrop-blur-[8px] lg:bg-[#00000040]">
      <div className="bg-black lg:bg-[#1B1B1B] w-full h-full lg:w-[35%] relative ">
        <div className="py-5 px-8 flex justify-between items-center border-b border-[#323232]">
          <span className="text-2xl">MENU</span>
          <button className="flex uppercase space-x-3 items-center absolute ">
            <span className="text-lg lg:hidden">cancel</span>
            <CancelIcon />
          </button>
        </div>
        <div className="px-8 pb-6  flex justify-between flex-col flex-1 h-[90%] lg:text-center lg:items-center lg:justify-center">
          <ul className="flex flex-col py-10">
            {links.map(({ id, link, href, icon }) => (
              <li
                key={id}
                className="px-4 cursor-pointer text-xl font-medium text-white  hover:text-white duration-200 link-underline my-7 uppercase"
              >
                <Link href={href} className="flex space-x-5 items-center">
                  <span>{icon}</span>
                  <span>{link}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <button className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm tracking-[0.25rem]">
              Get In Touch
            </button>
            <div className="mt-8 text-lg font-medium">
              <h3 className="uppercase">Socials</h3>
              <SocialBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
