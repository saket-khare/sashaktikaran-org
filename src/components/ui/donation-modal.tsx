"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Copy, CheckCircle } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<"details" | "qr">("qr");

  const donationDetails = [
    { label: "UPI ID", value: "43522951986@sbi", id: "upi" },
    { label: "Account Name", value: "Sashaktikaran Foundation", id: "accName" },
    { label: "Bank", value: "State Bank of India", id: "bank" },
    { label: "Account Number", value: "43522951986", id: "accNo" },
    { label: "IFSC Code", value: "SBIN0001986", id: "ifsc" },
  ];

  const copyToClipboard = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-[#006b5e]">
                  Support Our Mission
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("qr")}
                  className={`flex-1 py-3 px-4 text-sm font-medium text-center transition-colors ${
                    activeTab === "qr"
                      ? "text-[#006b5e] border-b-2 border-[#006b5e] bg-[#006b5e]/5"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  QR Code
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`flex-1 py-3 px-4 text-sm font-medium text-center transition-colors ${
                    activeTab === "details"
                      ? "text-[#006b5e] border-b-2 border-[#006b5e] bg-[#006b5e]/5"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Account Details
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "details" && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Donation Text */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Bank Transfer Details
                        </h3>
                        <p className="text-sm text-gray-600">
                          Use these details for direct bank transfer or UPI
                          payment
                        </p>
                      </div>

                      {/* Payment Details */}
                      <div className="space-y-3">
                        {donationDetails.map((detail) => (
                          <div
                            key={detail.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-700">
                                {detail.label}
                              </p>
                              <p className="text-sm text-gray-900 font-mono break-all">
                                {detail.value}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(detail.value, detail.id)
                              }
                              className="ml-2 flex-shrink-0"
                            >
                              {copiedField === detail.id ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "qr" && (
                    <motion.div
                      key="qr"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* QR Code Text */}
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Scan to Donate
                        </h3>
                        <p className="text-sm text-gray-600">
                          Scan the QR code with any UPI app to make a quick
                          donation
                        </p>
                      </div>

                      {/* QR Code Image */}
                      <div className="flex justify-center">
                        <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-200">
                          <Image
                            src="/donate.jpeg"
                            alt="Donation QR Code"
                            height={926}
                            width={1280}
                          />
                        </div>
                      </div>

                      {/* UPI ID for QR */}
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          UPI ID
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-sm text-gray-900 font-mono">
                            43522951986@sbi
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard("43522951986@sbi", "qr-upi")
                            }
                            className="flex-shrink-0"
                          >
                            {copiedField === "qr-upi" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Thank you message */}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <Button
                  onClick={onClose}
                  className="w-full bg-[#006b5e] hover:bg-[#006b5e]/90"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DonationModal;
