import React from "react";
import Image from "next/image";

export const SectionProjectHeader = () => {
  return (
    <>
      <div className="py-7 border-b border-[#ffffff90]"></div>
      <section>
        <div className="h-[20rem] relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 ">
          <Image
            src={"/img/project.svg"}
            alt="Project Image"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute  z-10 py-4 top-0 px-5 ">
            <button className="bg-white text-black py-1 text-lg uppercase px-6 font-semibold">
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
