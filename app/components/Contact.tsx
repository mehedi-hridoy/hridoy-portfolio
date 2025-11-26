"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ContactSchema, type ContactFormData } from "@/lib/validation/contact";
import { useState } from "react";
import SplitText from "@/app/components/ui/SplitText";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Message sent!");
        reset();
      } else {
        toast.error(json.error || "Failed to send message");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32">
      {/* Heading */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <SplitText
          text={
            <>
              Let&apos;s Create <br />
              Something{" "}
              <span className="text-[#A855F7] drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                Amazing
              </span>
            </>
          }
          className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
          textAlign="left"
          tag="h2"
        />
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 
                   p-6 sm:p-8 md:p-10 shadow-lg dark:shadow-[0_0_40px_-15px_rgba(0,0,0,0.5)]"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
          {/* Name */}
          <div>
            <label className="block text-xs sm:text-sm text-slate-700 dark:text-gray-300 mb-2">Name</label>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white
                         placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] transition"
            />
            {errors.name && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm text-slate-700 dark:text-gray-300 mb-2">Email</label>
            <input
              {...register("email")}
              placeholder="you@example.com"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white
                         placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] transition"
            />
            {errors.email && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs sm:text-sm text-slate-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Your Message"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white
                         placeholder-slate-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] resize-none transition"
            />
            {errors.message && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl bg-[#A855F7] hover:bg-[#8B2DFF] text-white 
                       font-semibold shadow-[0_0_20px_#A855F7aa] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
