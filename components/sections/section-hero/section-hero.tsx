import React from "react";
import Link from "next/link";
import Image from "next/image";

export const SectionHero = () => {
  return (
    <section>
      <div className="container mx-auto flex items-center flex-col min-h-[80vh] uppercase justify-center relative">
        <div className="absolute top-0">
          <Image
            src="/img/ceeriil.png"
            width={805}
            height={1425}
            alt="ceeriil illustration"
          />
        </div>
        <div className="border border-dashed border-[#4AFFA4] px-4 text-center py-10 max-w-[40rem] bg-[#4AFFA417] z-10">
          <p className="text-2xl">
            {" "}
            Creative front-end developer Building beautiful experiences for web
            3
          </p>
        </div>
      </div>
    </section>
  );
};
