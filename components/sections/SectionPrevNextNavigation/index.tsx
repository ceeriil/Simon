import React from "react";
import Link from "next/link";

export const SectionPrevNextNavigation = () => {
  return (
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
  );
};
