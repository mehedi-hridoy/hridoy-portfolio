"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function LeftCard() {
  return (
    <div
      className="
        w-full max-w-[360px] md:max-w-[500px] lg:max-w-[360px] mx-auto
        bg-white/90 dark:bg-black/40 dark:dark:bg-white/10
        backdrop-blur-xl
        rounded-[32px]
        border border-slate-200 dark:border-white/10
        p-8 sm:p-10
        shadow-xl
        text-center
        font-poppins
      "
    >
      {/* Profile Image */}
      <div className="w-full max-w-[250px] h-[300px] rounded-2xl overflow-hidden mx-auto mb-6 sm:mb-8">
        <Image
          src="/images/Mehedi_hridoy.png"
          alt="Mehedi Hasan Hridoy"
          width={250}
          height={300}
          unoptimized={true}
          priority
          className="object-cover w-full h-full"
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>

      {/* Name */}
      <h2 className="text-[26px] font-extrabold text-slate-900 dark:text-white mb-3 whitespace-nowrap">
  Mehedi Hasan Hridoy
</h2>


      {/* Title */}
      <p className="text-slate-700 dark:text-gray-300 text-[15px] font-medium mb-1">
        Full Stack Engineer
      </p>

      {/* Location */}
      <p className="text-slate-500 dark:text-gray-500 text-xs tracking-wide mb-6">
        Dhaka, Bangladesh
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-7 mb-10 text-slate-700 dark:text-white/90 text-[22px]">
        <a
          href="https://github.com/mehedi-hridoy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 dark:hover:text-white transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/_Mehedi_Hridoy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 dark:hover:text-white transition"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.instagram.com/mehedi_hasan_.hridoy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-900 dark:hover:text-white transition"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:mehedi.hridoy101@gmail.com"
          className="hover:text-slate-900 dark:hover:text-white transition"
        >
          <HiOutlineEnvelope />
        </a>
      </div>

      {/* Button */}
      <Link
  href="/contact"
  className="
    w-[200px]
    mx-auto
    py-3.5
    bg-purple-600 hover:bg-purple-500
    rounded-xl
    text-white
    text-[15px]
    font-semibold
    transition-all
    block text-center
  "
>
  Let’s Talk
</Link>
    </div>
  );
}
