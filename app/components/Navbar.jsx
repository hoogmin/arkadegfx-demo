"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Red_Hat_Mono } from "next/font/google";

const redHatMono = Red_Hat_Mono({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
    const mobileMenuRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileBreakpoint = 768;

    const mobileMenuToggle = () => {
        console.log(`OPEN?: ${isMobileMenuOpen}`);

        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleClickOutside = (e) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
            setIsMobileMenuOpen(false);
        }
    }

    const handleResize = () => {
        if (window.innerWidth > mobileBreakpoint) {
            console.log("RESIZED");
            setIsMobileMenuOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <nav className={`${redHatMono.className} bg-transparent z-[100] absolute w-full text-2xl`}>
            <div className="container mx-auto px-4 py-2 flex flex-col justify-center items-center md:flex-row md:space-x-8">
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                    className="text-white hover:text-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" 
                    href="/book-us">
                        Book Us
                    </Link>
                    <Link
                    className="text-white hover:text-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" 
                    href="/">
                        Home
                    </Link>
                    <Link
                    className="text-white hover:text-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white" 
                    href="/about">
                        About
                    </Link>
                </div>
                <button 
                id="menu-toggle" 
                className="md:hidden block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                onClick={mobileMenuToggle}>
                    <svg 
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
                <div 
                ref={mobileMenuRef}
                id="menu-content"
                className={`${isMobileMenuOpen ? "block" : "hidden"} top-full left-0 w-full py-4 mt-2 bg-gray-800 rounded-lg shadow-xl`}>
                    <ul className="space-y-2 px-3">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">About</Link>
                        </li>
                        <li>
                            <Link href="/book-us" className="text-white hover:text-gray-400 block px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Book Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;