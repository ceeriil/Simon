import { SmilingFace } from "@/components/assets/SmilingFace";
import React from "react";

export const SectionGetStarted = () => {
  return (
    <section className="flex items-center justify-center py-24 text-center flex-col mb-32">
      <SmilingFace />
      <h2 className="text-[4rem] uppercase font-[600] mt-6 leading-[1.3]">
        Ready to build <br /> your next project?
      </h2>
      <button className="button button--size-xl button--primary">
        <span className="button__content">yeah</span>
      </button>
    </section>
  );
};
