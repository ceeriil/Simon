import { ArrowLink } from "@/components/assets/ArrowLink";
import { Profile } from "@/components/assets/Profile";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/assets/Tag";

export default function ProjectDetails() {
  return (
    <section className="px-6">
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
      <section className="border-t border-[#ffffff90]">
        <div className=" relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 px-12 py-20 ">
          <h2 className="text-3xl uppercase mb-3  tracking-[0.4rem] font-[600]">
            Beatbridge
          </h2>
          <div className="py-4 mb-2">
            <Tag />
          </div>
          <p className="py-2 text-lg lg:pr-8">
            BeatBridge allows fans to support their favorite artists directly.
            By engaging with music, sharing, and promoting it, fans earn tokens
            redeemable for exclusive rewards. It's a unique platform where every
            beat builds bridges between artists and fans.<br></br>
            We leveraged the noir to veify off-chain data on-chain securely. The
            Spotify API allowed us to collect various user-related data (such as
            favorite songs, playlists, time spent on music, etc.), but this data
            inherently resided off-chain.
          </p>
          <Link
            href="/"
            className="inline-flex text-[#4AFFA4] mt-12 text-xl uppercase tracking-[0.35rem] space-x-5"
          >
            <ArrowLink />
            <span>Visit Live Project</span>
          </Link>
        </div>

        <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
          <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
            Project Tags
          </h2>
        </div>

        <section className="py-16 border-l border-r border-[#ffffff90] container mx-auto pb-32 ">
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
        </section>

        <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
          <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
            Awards
          </h2>
        </div>

        <section className="py-8 border-l border-r border-[#ffffff90] container mx-auto pb-32">
          <div className=" grid mx-auto gap-2">
            <div className="border-[#727171] border-l-0 border-r-0 border uppercase tracking-[0.35rem] text-xl text-white py-5 px-3 bg-[#1A1A1A] text-center">
              Chainlink Summer Hackhathon 2023
            </div>
          </div>
        </section>

        <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
          <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
            Collaborators
          </h2>
        </div>

        <section className="py-8 border-l border-r border-[#ffffff90] container mx-auto pb-20">
          <div className=" grid mx-auto gap-2 grid-cols-3">
            <div className="border-[#727171]  border  text-white py-4 px-3 bg-[#1A1A1A] text-left flex space-x-5 items-center justify-center cursor-pointer">
              <Profile />
              <div>
                <span className="text-lg tracking-[0.25rem]  uppercase ">
                  Daniel
                </span>
                <p className="text-sm text-gray-300">
                  Smart Contract Developer
                </p>
              </div>
            </div>

            <div className="border-[#727171]  border  text-white py-4 px-3 bg-[#1A1A1A] text-left flex space-x-5 items-center justify-center cursor-pointer">
              <Profile />
              <div>
                <span className="text-lg tracking-[0.25rem]  uppercase ">
                  Crack
                </span>
                <p className="text-sm text-gray-300">
                  Smart Contract Developer
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto border-t border-l border-r border-[#ffffff90]">
          <h2 className="bg-white py-1 px-4 uppercase text-xl translate-y-[-50%] text-black inline-block tracking-[0.4rem] font-medium ml-6">
            Project screenshots
          </h2>
        </div>
      </section>

      <section className="py-8 border-l border-r border-[#ffffff90] container mx-auto ">
        <div className=" grid mx-auto gap-2">
          <div className=" mx-4 border uppercase tracking-[0.35rem] text-xl text-white py-5 px-3 bg-[#1A1A1A] text-center border-[#4AFFA4] border-dashed min-h-[30rem]"></div>
        </div>
      </section>

      <div className="border-t border-[#ffffff90]">
        <div className="py-12 pb-32 flex justify-between container mx-auto">
          <Link
            href={"/projects"}
            className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block bg-[#061E23
]  tracking-[0.35rem]"
          >
            Previous
          </Link>
          <Link
            href={"/projects"}
            className="border-[#4AFFA4] text-[#4AFFA4] py-2.5 px-6 border-2 mt-4 uppercase text-sm inline-block bg-[#061E23
] tracking-[0.35rem]"
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}
