import Image from "next/image";
import React from "react";
import Link from "next/link";

export const SectionRecent = () => {
  return (
    <section className="border-t ">
      <div className="container mx-auto">
        <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium">
          Recent Projects
        </h2>
      </div>

      <div className="flex flex-col container mx-auto py-5 ">
        {/*  */}

        <div className="grid lg:grid-cols-[45%,50%] gap-[5rem] py-16 items-center">
          <Image src={"/img/card.svg"} alt="card" width={653} height={338} />
          <div>
            <h2 className="uppercase text-2xl mb-3">Dinamiko</h2>
            <p>
              I’m a creative frontend developer with a passion for crafting
              engaging and visually appealing web experiences. With a keen eye
              for design and a deep understanding of modern web technologies, I
              specialize in building intuitive, user-friendly interfaces. My
              experience spans across various industries, from finance to
              fashion, blending functionality with aesthetics to create standout
              digital experiences. I have a particular interest in Web3, working
              on innovative projects that merge blockchain technology with
              cutting-edge UI/UX principles. Let’s build the future, one pixel
              at a time.
            </p>
            <Link
              href={"/projects"}
              className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block"
            >
              View Project
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid lg:grid-cols-[45%,50%] gap-[5rem] py-16 items-center">
          <Image src={"/img/card.svg"} alt="card" width={653} height={338} />
          <div>
            <h2 className="uppercase text-2xl mb-3">Paystream</h2>
            <p>
              I’m a creative frontend developer with a passion for crafting
              engaging and visually appealing web experiences. With a keen eye
              for design and a deep understanding of modern web technologies, I
              specialize in building intuitive, user-friendly interfaces. My
              experience spans across various industries, from finance to
              fashion, blending functionality with aesthetics to create standout
              digital experiences. I have a particular interest in Web3, working
              on innovative projects that merge blockchain technology with
              cutting-edge UI/UX principles. Let’s build the future, one pixel
              at a time.
            </p>
            <button className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm">
              View Project
            </button>
          </div>
        </div>
        {/*  */}
        <div className="grid lg:grid-cols-[45%,50%] gap-[5rem] py-16 items-center">
          <Image src={"/img/card.svg"} alt="card" width={653} height={338} />
          <div>
            <h2 className="uppercase text-2xl mb-3">Daily Loogies</h2>
            <p>
              I’m a creative frontend developer with a passion for crafting
              engaging and visually appealing web experiences. With a keen eye
              for design and a deep understanding of modern web technologies, I
              specialize in building intuitive, user-friendly interfaces. My
              experience spans across various industries, from finance to
              fashion, blending functionality with aesthetics to create standout
              digital experiences. I have a particular interest in Web3, working
              on innovative projects that merge blockchain technology with
              cutting-edge UI/UX principles. Let’s build the future, one pixel
              at a time.
            </p>
            <button className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm">
              View Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
