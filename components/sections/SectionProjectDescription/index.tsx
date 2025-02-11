import React from "react";
import Link from "next/link";
import { Tag } from "@/components/assets/Tag";
import { ArrowLink } from "@/components/assets/ArrowLink";

export const SectionProjectDescription = () => {
  return (
    <section className=" relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 px-12 py-20 ">
      <h2 className="text-3xl uppercase mb-3  tracking-[0.4rem] font-[600]">
        Beatbridge
      </h2>
      <div className="py-4 mb-2">
        <Tag />
      </div>
      <p className="py-2 text-lg lg:pr-8">
        BeatBridge allows fans to support their favorite artists directly. By
        engaging with music, sharing, and promoting it, fans earn tokens
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
    </section>
  );
};
