import React from "react";

export const SectionProjectTags = () => {
  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Project Tags
        </h2>
      </div>

      <div className="py-16 border-l border-r border-[#ffffff90] container mx-auto pb-32 ">
        <div className=" grid mx-auto grid-cols-4 gap-2">
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A] text-center">
            Next js
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A] text-center">
            CSS
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A] text-center">
            Ethereum
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A] text-center">
            Spotify API
          </div>
        </div>
      </div>
    </section>
  );
};
