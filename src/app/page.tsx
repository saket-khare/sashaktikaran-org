import { Hero, About, Mission, Impact } from "@/components/Pages/Home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Mission />
      <Impact />
    </div>
  );
}
