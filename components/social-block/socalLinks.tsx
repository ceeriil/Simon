import { DiscordIcon } from "../assets/Discord";
import { GithubIcon } from "../assets/Github";
import { LinkedinIcon } from "../assets/Linkedin";
import { TwitterIcon } from "../assets/Twitter";

export interface ISocialLinks {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const socialLinks: ISocialLinks[] = [
  {
    name: "github",
    href: "/",
    icon: <GithubIcon />,
  },
  {
    name: "linkedin",
    href: "/",
    icon: <LinkedinIcon />,
  },
  {
    name: "twitter",
    href: "/",
    icon: <TwitterIcon />,
  },
  {
    name: "discord",
    href: "/",
    icon: <DiscordIcon />,
  },
];
