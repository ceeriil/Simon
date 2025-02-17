import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IProjectCardProps {
  name: string;
  description: string;
  slug: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  description,
  slug,
}) => {
  return (
    <div className="grid lg:grid-cols-[45%,50%] gap-[5rem] py-16 items-center">
      <Image src={"/img/card.svg"} alt="card" width={653} height={338} />
      <div>
        <h2 className="uppercase text-2xl mb-3">{name}</h2>
        <p>{description}</p>
        <Link
          href={`/projects/${slug}`}
          className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};
