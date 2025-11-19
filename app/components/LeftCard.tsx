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
          quality={100}
          priority={true}
          placeholder="empty"
          className="object-cover"
          style={{
            imageRendering: "crisp-edges", 
          }}
        />
      </div>

      <h2 className="text-2xl font-semibold text-white mb-2">
        Mehedi Hasan Hridoy
      </h2>

      <p className="text-gray-300 text-sm">Full Stack Engineer</p>

      <p className="text-gray-500 text-xs mt-1">
        Dhaka, Bangladesh
      </p>

      <div className="flex items-center justify-center gap-6 mt-6 text-white/80 text-[20px]">
        <a href="#" className="hover:text-white transition"><FaGithub /></a>
        <a href="#" className="hover:text-white transition"><FaXTwitter /></a>
        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
        <a href="#" className="hover:text-white transition"><HiOutlineEnvelope /></a>
      </div>

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
