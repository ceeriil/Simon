import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-5 flex justify-between uppercase">
        <Link href={"/"}> Ceeriil</Link>
        <div>
          <button className="bg-white inline-block py-2 px-5 text-black uppercase">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};
