"use client";

import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  category: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  productName,
  category,
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hello, I would like to inquire about specifications, availability, and ordering details for "${productName}".`
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          productInterest: productName,
          categoryInterest: category,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An error occurred while submitting your enquiry.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-neutral-200 max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {status === "success" ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="w-12 h-12 text-black mx-auto stroke-[1.5]" />
                <h3 className="font-serif text-2xl font-normal text-black">
                  Enquiry Received
                </h3>
                <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in the{" "}
                  <strong className="font-medium text-black">{productName}</strong>.
                  Our team at K J ENTERPRISES will review your inquiry and connect with you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs uppercase tracking-widest px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-neutral-500 block">
                    Product Inquiry
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-black leading-snug">
                    {productName}
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono">
                    Category: {category}
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-neutral-100 border border-neutral-300 text-xs text-red-600">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                      Your Name <span className="text-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-xs p-2.5 border border-neutral-300 focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                        Email Address <span className="text-black">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full text-xs p-2.5 border border-neutral-300 focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                        Phone Number <span className="text-black">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs p-2.5 border border-neutral-300 focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                      Message / Custom Dimensions
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs p-2.5 border border-neutral-300 focus:border-black focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs uppercase tracking-wider px-4 py-2.5 border border-neutral-200 text-neutral-600 hover:text-black hover:border-black transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-2.5 bg-black text-white hover:bg-neutral-800 transition-colors disabled:opacity-50"
                  >
                    {status === "loading" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
