"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialInterest = searchParams?.get("interest") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryInterest, setCategoryInterest] = useState("General Furnishing");
  const [productInterest, setProductInterest] = useState(initialInterest);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setProductInterest(initialInterest);
    }
  }, [initialInterest]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Full name is required";
    if (!email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!message.trim()) errs.message = "Please include a message or inquiry details";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setIsSuccess(true);
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          categoryInterest,
          productInterest: productInterest || undefined,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setIsSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err: any) {
      setErrors({ form: err.message || "Failed to submit enquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-neutral-50 border border-neutral-200 p-8 sm:p-12 text-center space-y-4">
        <CheckCircle className="w-12 h-12 text-black mx-auto stroke-[1.5]" />
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black">
          Enquiry Sent Successfully
        </h3>
        <p className="text-sm text-neutral-600 max-w-md mx-auto font-light leading-relaxed">
          Thank you for reaching out to K J ENTERPRISES. We have received your message and will review your specifications promptly.
        </p>
        <div className="pt-4">
          <button
            onClick={() => setIsSuccess(false)}
            className="text-xs uppercase tracking-widest px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input
        type="text"
        name="website_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {errors.form && (
        <div className="p-4 bg-neutral-100 border border-neutral-300 text-xs text-red-600 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs uppercase tracking-widest text-neutral-700 mb-2 font-medium"
        >
          Full Name <span className="text-black">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Priyanshu Mehta"
          className={`w-full text-xs p-3.5 bg-white border ${
            errors.name ? "border-red-500" : "border-neutral-300"
          } focus:border-black focus:outline-none text-black`}
        />
        {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs uppercase tracking-widest text-neutral-700 mb-2 font-medium"
          >
            Email Address <span className="text-black">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@domain.com"
            className={`w-full text-xs p-3.5 bg-white border ${
              errors.email ? "border-red-500" : "border-neutral-300"
            } focus:border-black focus:outline-none text-black`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs uppercase tracking-widest text-neutral-700 mb-2 font-medium"
          >
            Phone Number <span className="text-black">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className={`w-full text-xs p-3.5 bg-white border ${
              errors.phone ? "border-red-500" : "border-neutral-300"
            } focus:border-black focus:outline-none text-black`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-category"
            className="block text-xs uppercase tracking-widest text-neutral-700 mb-2 font-medium"
          >
            Category of Interest
          </label>
          <select
            id="contact-category"
            value={categoryInterest}
            onChange={(e) => setCategoryInterest(e.target.value)}
            className="w-full text-xs p-3.5 bg-white border border-neutral-300 focus:border-black focus:outline-none text-black cursor-pointer"
          >
            <option value="General Furnishing">General Furnishing</option>
            <option value="Bedsheets">Bedsheets</option>
            <option value="Comforters">Comforters</option>
            <option value="Cushion Covers">Cushion Covers</option>
            <option value="Curtains">Curtains</option>
            <option value="Residential Project">Residential Project Consultation</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-product"
            className="block text-xs uppercase tracking-widest text-neutral-700 mb-2 font-medium"
          >
            Specific Product (Optional)
          </label>
          <input
            id="contact-product"
            type="text"
            value={productInterest}
            onChange={(e) => setProductInterest(e.target.value)}
            placeholder="e.g. Monochrome Sateen Bedsheet Set"
            className="w-full text-xs p-3.5 bg-white border border-neutral-300 focus:border-black focus:outline-none text-black"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-widest text-neutral-700 mb-2 font-medium"
        >
          Your Message / Inquiries <span className="text-black">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please describe your space requirements, preferred sizes, or inquiry details..."
          className={`w-full text-xs p-3.5 bg-white border ${
            errors.message ? "border-red-500" : "border-neutral-300"
          } focus:border-black focus:outline-none text-black resize-y`}
        />
        {errors.message && (
          <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors font-medium disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        <span>Submit General Enquiry</span>
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-neutral-400">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
