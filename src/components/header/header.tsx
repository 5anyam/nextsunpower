"use client";
import { RiFacebookBoxLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { TbBrandLinkedin } from "react-icons/tb";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Logo and Menu */}
        <div className="w-full flex items-center justify-between lg:justify-start lg:w-auto">
          {/* Logo */}
          <Link href="/">
            <Image className="hidden lg:block pr-8" src="/nextsunpower-logo.svg" alt="NextSunPowerLogo" width={260} height={140} />
            <Image className="block lg:hidden" src="/nextsunpower-logo.svg" alt="NextSunPowerLogo" width={160} height={80} />
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links + Search + Socials */}
        <div className={`w-full lg:flex lg:items-center lg:justify-between ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 text-gray-600 mt-4 lg:mt-0">
            <Link href="https://www.nextsunpower.com" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Home</Link>
            <Link href="#" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Solar Services </Link>
            <Link href="https://www.nextsunpower.com/blog" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Blogs</Link>
            <Link href="https://www.nextsunpower.com/about" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">About</Link>
            <Link href="https://www.nextsunpower.com/contact" className="mt-2 lg:mt-0 hover:text-gray-900 dark:hover:text-white">Contact</Link>
            {/* Search */}
            <div className="relative mt-4 lg:mt-0">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      className="w-5 h-5 text-gray-600 transition duration-300 transform group-hover:text-black"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
  <input
    type="text"
    placeholder="Search..."
    className="w-full lg:w-64 py-2 pl-10 pr-4 border-2 border-gray-400 bg-transparent text-gray-800 focus:outline-none focus:border-primary transition duration-300 rounded-md"
  />
</div></div>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mt-6 lg:mt-0">
          <Link href="https://www.facebook.com/people/nextsunpower/61575434679519/"><RiFacebookBoxLine className="text-black text-3xl" /></Link>
          <Link href="https://www.instagram.com/nextsunpower/"><GrInstagram className="text-black text-2xl"/></Link>
          <Link href="https://www.linkedin.com/company/nextsunpower/"><TbBrandLinkedin className="text-black text-3xl"/></Link>
          <button className="p-2 border rounded-md bg-primary text-white">Free Quotation</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
