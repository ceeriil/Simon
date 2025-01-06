import Image from "next/image";
import { SplashScreen } from "@/components/layout/splash-screen/splash-screen";
import { Header } from "@/components/layout/header/header";
import { SectionHero } from "@/components/sections/section-hero/section-hero";
import { SectionAbout } from "@/components/sections/section-about/section-about";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionAbout />
    </>
  );
}
