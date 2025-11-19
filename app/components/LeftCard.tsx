"use client";

import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function LeftCard() {
  return (
    <div
      className="
        w-[344px]
        bg-black/40 dark:bg-white/10
        backdrop-blur-xl
        rounded-3xl
        border border-white/10
        p-8
        shadow-xl
        text-center
        font-poppins
      "
    >
      {/* Profile Image */}
      <div className="w-[240px] h-[284px] rounded-2xl overflow-hidden mx-auto mb-8">
        <Image
          src="/images/Mehedi_hridoy.png"
          alt="Mehedi Hasan Hridoy"
          width={240}
          height={284}
          unoptimized={true}       // ⬅ load EXACT file, no optimization
          priority={true}
          className="object-cover"
          style={{
            imageRendering: "crisp-edges",    // force sharper rendering
          }}
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-semibold text-white mb-2">
        Mehedi Hasan Hridoy
      </h2>

      {/* Title */}
      <p className="text-gray-300 text-sm">Full Stack Engineer</p>

      {/* Location */}
      <p className="text-gray-500 text-xs mt-1">
        Dhaka, Bangladesh
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 mt-6 text-white/80 text-[20px]">
        <a href="https://github.com/mehedi-hridoy" target="_blank" className="hover:text-white transition"><FaGithub /></a>
        <a href="https://x.com/_Mehedi_Hridoy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/mehedi_hasan_.hridoy/" target="_blank" className="hover:text-white transition"><FaInstagram /></a>
        <a href="mailto:mehedi.hridoy101@gmail.com" className="hover:text-white transition"><HiOutlineEnvelope /></a>
      </div>

      {/* Button */}
      <button
        className="
          mt-10
          w-[180px]
          mx-auto
          py-3
          bg-purple-600 hover:bg-purple-500
          rounded-xl
          text-white text-sm font-medium
          transition
        "
      >
        Let’s Talk
      </button>
    </div>
  );
}
