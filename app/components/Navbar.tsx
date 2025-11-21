"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineWrench,
  HiOutlineUserCircle,
  HiOutlineEnvelope,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", icon: <HiOutlineHome className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />, href: "/" },
    { name: "Projects", icon: <HiOutlineFolder className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />, href: "/projects" },
    { name: "Tools", icon: <HiOutlineWrench className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />, href: "/tools" },
    { name: "Academics", icon: <HiOutlineAcademicCap className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />, href: "/academics" },

    { name: "About", icon: <HiOutlineUserCircle className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />, href: "/about" },
    { name: "Contact", icon: <HiOutlineEnvelope className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />, href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-0">
      <div
        className="
          flex items-center gap-3 sm:gap-4 md:gap-6 
          bg-black/40 dark:bg-white/10
          backdrop-blur-xl 
          px-4 sm:px-6 py-3 
          rounded-2xl
          border border-white/10
          justify-center
        "
      >
        {navItems.map((item, i) => (
          <NavIcon key={i} name={item.name} href={item.href}>
            {item.icon}
          </NavIcon>
        ))}

        {/* THEME TOGGLE */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="relative text-white dark:text-white hover:opacity-80 transition"
        >
          {theme === "light" ? (
            <HiOutlineMoon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          ) : (
            <HiOutlineSun className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
          )}
        </button>
      </div>
    </nav>
  );
}

function NavIcon({
  name,
  href,
  children,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center text-white dark:text-white"
    >
      {/* Icon */}
      <div className="transition-all duration-200 hover:scale-110">
        {children}
      </div>

      {/* Tooltip */}
      {hovered && (
        <span
          className="
            absolute -bottom-7 px-2 py-1
            text-xs rounded-md
            bg-black/70 dark:bg-white/20
            backdrop-blur
            border border-white/10
            text-white
            whitespace-nowrap
            transition-opacity
          "
        >
          {name}
        </span>
      )}
    </Link>
  );
}
