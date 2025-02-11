import React from "react";
import Image from "next/image";
import { SocialBlock } from "@/components/social-block";

export const SectionHero = () => {
  return (
    <section>
      <div className="container mx-auto flex items-center flex-col min-h-[1100px] uppercase justify-center overflow-hidden relative">
        <div className="absolute left-0 top-[10rem]">
          <SocialBlock />
        </div>

        <div className="absolute top-0">
          <Image
            src="/img/ceeriil.png"
            width={805}
            height={1425}
            alt="ceeriil illustration"
          />
        </div>

        <div className="border border-dashed border-[#4AFFA4] px-4 text-center py-10 max-w-[40rem] bg-[#4AFFA417] z-10">
          <h2 className="text-2xl">
            Creative front-end developer Building beautiful experiences for web3
          </h2>
        </div>
      </div>
    </section>
  );
};
