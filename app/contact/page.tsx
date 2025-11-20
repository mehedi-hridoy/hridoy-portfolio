"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const Schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message is too short"),
});

type FormData = z.infer<typeof Schema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   // FIXED
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    setLoading(false);

    if (json.success) {
      toast.success("Message sent!");
      reset();
    } else {
      toast.error(json.error || "Something went wrong");
    }
  };

  return (
    <section className="w-full pt-28">
      <h1 className="text-5xl font-extrabold mb-6 text-white">
        Let’s Create Something <span className="text-purple-400">Amazing</span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="text-sm text-gray-300">Name</label>
          <input
            {...register("name")}
            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-300">Email</label>
          <input
            {...register("email")}
            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white"
            placeholder="Your message"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
