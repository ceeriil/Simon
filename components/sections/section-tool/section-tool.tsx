import React from "react";

export const SectionTool = () => {
  return (
    <section className="border-t ">
      <div className="container mx-auto">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium">
          Tools
        </h2>
        <div className="grid lg:grid-cols-3 gap-7 gap-y-7 py-16 items-center">
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-12 px-3 bg-[#1A1A1A] items-center text-center justify-center flex border-b-4 border-b-[#fff] ">
            Next js
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-12 px-3 bg-[#1A1A1A] items-center text-center justify-center flex border-b-4 border-b-[#fff] ">
            Reacts
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-12 px-3 bg-[#1A1A1A] items-center text-center justify-center flex border-b-4 border-b-[#fff] ">
            CSS
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-12 px-3 bg-[#1A1A1A] items-center text-center justify-center flex border-b-4 border-b-[#fff] ">
            Tailwind
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-12 px-3 bg-[#1A1A1A] items-center text-center justify-center flex border-b-4 border-b-[#fff] ">
            Firebase
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-12 px-3 bg-[#1A1A1A] items-center text-center justify-center flex border-b-4 border-b-[#fff] ">
            TypeScript
          </div>
        </div>
      </div>
    </section>
  );
};
