import Link from "next/link";
import React from "react";
import { socialLinks } from "./socalLinks";

export const SocialBlock = () => {
  return (
    <ul className="flex space-x-4">
      {socialLinks.map((social) => (
        <li key={social.name} className="my-4 ">
          <Link href={social.href}>{social.icon}</Link>
        </li>
      ))}
    </ul>
  );
};
