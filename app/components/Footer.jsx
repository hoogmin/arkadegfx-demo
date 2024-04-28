import { Red_Hat_Mono } from "next/font/google";

const redHatMono = Red_Hat_Mono({ subsets: ["latin"], weight: "400" });

const Footer = () => {
    return (
        <footer className={`${redHatMono.className} w-full text-center fixed bottom-0 z-10 mt-auto max-sm:text-xs`}>
            &copy; Javier Martinez 2024 - &#91;<a className="hover:underline" href="https://github.com/hoogmin/arkadegfx-demo" rel="noopener noreferrer" target="_blank">GitHub</a>&#93; - Demo Website
        </footer>
    )
}

export default Footer;