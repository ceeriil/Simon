import React from "react";
import projects from "@/data/projects";
import { ProjectCard } from "@/components/ui/Cards/ProjectCard";

export const SectionRecent = () => {
  return (
    <section className="border-t ">
      <div className="container mx-auto">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium">
          Recent Projects
        </h2>
      </div>

      <div className="flex flex-col container mx-auto py-5  px-4">
        {projects.map(({ name, description, slug }) => (
          <ProjectCard name={name} description={description} slug={slug} />
        ))}
      </div>
    </section>
  );
};
