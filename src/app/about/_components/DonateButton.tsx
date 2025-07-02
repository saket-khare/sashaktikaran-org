"use client";
import { Button } from "@/components/ui/button";
import DonationModal from "@/components/ui/donation-modal";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const DonateButton = ({
  buttonText = "Contribute Now",
  className,
}: {
  buttonText?: string;
  className?: string;
}) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="w-full">
      <Button
        onClick={() => setIsDonationModalOpen(true)}
        className={cn(
          "bg-[#4996e4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#4996e4]/90 transition-all duration-300 cursor-pointer",
          className
        )}
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
