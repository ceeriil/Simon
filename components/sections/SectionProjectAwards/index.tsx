import React from "react";

export const SectionProjectAwards = () => {
  return (
    <section>
      <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
          Awards
        </h2>
      </div>

      <div className="py-8 border-l border-r border-[#ffffff90] container mx-auto pb-32">
        <div className=" grid mx-auto gap-2">
          <div className="border-[#727171] border-l-0 border-r-0 border uppercase tracking-[0.35rem] text-xl text-white py-5 px-3 bg-[#1A1A1A] text-center">
            Chainlink Summer Hackhathon 2023
          </div>
        </div>
      </div>
    </section>
  );
};
