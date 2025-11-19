"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineWrench,
  HiOutlineUserCircle,
  HiOutlineEnvelope,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", icon: <HiOutlineHome size={22} />, href: "#" },
    { name: "Projects", icon: <HiOutlineFolder size={22} />, href: "#projects" },
    { name: "Tools", icon: <HiOutlineWrench size={22} />, href: "#tools" },
    { name: "About", icon: <HiOutlineUserCircle size={22} />, href: "#about" },
    { name: "Contact", icon: <HiOutlineEnvelope size={22} />, href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-6 
          bg-black/40 dark:bg-white/10
          backdrop-blur-xl 
          px-6 py-3 
          rounded-2xl
          border border-white/10
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
            <HiOutlineMoon size={22} />
          ) : (
            <HiOutlineSun size={22} />
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
    <a
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
    </a>
  );
}
