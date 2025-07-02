"use client";
import { Button } from "@/components/ui/button";
import DonationModal from "@/components/ui/donation-modal";
import React, { useState } from "react";

const DonateButton = ({
  buttonText = "Contribute Now",
}: {
  buttonText?: string;
}) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsDonationModalOpen(true)}
        className="bg-[#006b5e] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#006b5e]/90 transition-all duration-300 cursor-pointer"
      >
        {buttonText}
      </Button>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
};

export default DonateButton;
