import { ArrowLink } from "@/components/assets/ArrowLink";
import Image from "next/image";
import Link from "next/link";

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
      </section>

      <section className="py-16">
        <div className="container grid mx-auto grid-cols-4 gap-2">
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A]">
            Next js
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A]">
            CSS
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A]">
            Solidity
          </div>
          <div className="border-[#727171] border uppercase tracking-[0.35rem] text-lg py-3 px-3 bg-[#1A1A1A]">
            Next js
          </div>
        </div>
      </section>
    </section>
  );
}
