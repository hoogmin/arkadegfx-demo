import { Red_Hat_Mono } from "next/font/google";

const redHatMono = Red_Hat_Mono({ subsets: ["latin"], weight: "400" });

const Footer = () => {
    return (
        <footer className={`${redHatMono.className} container mx-auto w-auto justify-center items-center`}>
            &copy; Javier Martinez 2024 - BSD-3-Clause - Demo Website
        </footer>
    )
}

export default Footer;