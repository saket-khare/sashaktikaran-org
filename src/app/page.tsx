import {
  About,
  GetInvolved,
  Hero,
  Impact,
  OurModel,
  ProjectNeev,
  Stories,
} from "@/components/Pages/Home";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Hero />
      <About />
      <OurModel />
      <Impact />
      <ProjectNeev />
      <GetInvolved />
      {/* <Stories /> */}
      {/* <Newsletter /> */}
    </div>
  );
}
