import React from "react";
import Image from "next/image";
import { IProject } from "@/data/projects";

interface ISectionProjectSnapshotsProps {
  project: IProject;
}

export const SectionProjectSnapshots: React.FC<
  ISectionProjectSnapshotsProps
> = ({ project }) => {
  if (!project.snapshots || project.snapshots.length <= 0) {
    return <></>;
  }

  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Project screenshots
        </h2>
      </div>
      <div className="py-8 border-l border-r border-[#ffffff90] container mx-auto ">
        <div className=" grid mx-auto gap-2">
          <div className=" mx-4 border uppercase tracking-[0.35rem] text-xl text-white py-5 px-3 bg-[#1A1A1A] text-center border-[#4AFFA4] border-dashed min-h-[30rem]">
            <Image
              width={1000}
              height={400}
              alt={project.snapshots[0].name}
              src={project.snapshots[0].url}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
