import {
  Header,
  SectionAbout,
  SectionTools,
  SectionGetStarted,
  SectionHero,
  SectionRecent,
} from "@/components";
import { Menu } from "@/components/layout/Menu";

export default function Home() {
  return (
    <>
      {/*       <Menu />
       */}{" "}
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionRecent />
      <SectionTools />
      <SectionGetStarted />
    </>
  );
}
