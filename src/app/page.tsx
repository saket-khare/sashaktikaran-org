"use client";

import {
  About,
  GetInvolved,
  Hero,
  Impact,
  OurModel,
  ProjectNeev,
  Stories,
} from "@/components/Pages/Home";
import { useState } from "react";
import DonationModal from "@/components/ui/donation-modal";

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Hero />
      <About />
      <OurModel />
      <Impact />
      <ProjectNeev />
      <GetInvolved onContributeClick={() => setIsDonationModalOpen(true)} />
      {/* <Stories onContributeClick={() => setIsDonationModalOpen(true)} /> */}
      {/* <Newsletter /> */}

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
}
