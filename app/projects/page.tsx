import Image from "next/image";

export default function ProjectDetails() {
  return (
    <section className="px-6">
      <div className="py-5 border-b border-[#ffffff90]"></div>
      <section>
        <div className="h-[23rem] relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 ">
          <Image src={"/img/project.png"} alt="Project Image" layout="fill" />
        </div>
      </section>
      <section className="border-t border-[#ffffff90]">
        <div className=" relative container mx-auto border border-[#ffffff90] border-t-0 border-b-0 px-12 py-12 ">
          <h2 className="text-2xl uppercase">Dinamiko</h2>
          <p className="py-2 text-lg">
            My experience spans across various industries, from finance to
            fashion, blending functionality with aesthetics to create standout
            digital experiences. I have a particular interest in Web3, working
            on innovative projects that merge blockchain technology with
            cutting-edge UI/UX principles.
          </p>
        </div>
      </section>
    </section>
  );
}
