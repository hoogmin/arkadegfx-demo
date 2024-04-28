import { Red_Hat_Mono } from "next/font/google";
import Image from "next/image";

const redHatMono = Red_Hat_Mono({ subsets: ["latin"], weight: "400" });

const AboutPage = () => {
    return (
        <div className="flex flex-col md:flex-row overflow-x-hidden justify-center items-center w-[100vw] h-[100vh] max-w-[100%] mx-auto bg-[url('/img/about_bg.jpg')] bg-center px-8 pt-6 pb-8">
            <div className={`${redHatMono.className} w-[50%] mr-[35px] text-2xl max-md:text-base max-md:mt-10 max-sm:text-xs max-w-[682px] drop-shadow-md`}>
                <p className="text-left">
                    Welcome to ArkadeGFX, where pixels come to play and memories come alive! 
                    Step into our neon-lit world of retro gaming nostalgia, where every button press and joystick flick transports you back to the golden age of arcades. 
                    Immerse yourself in a symphony of bleeps and bloops as you challenge friends or conquer classic titles solo. 
                    From iconic cabinets to rare gems, ArkadeGFX is your ultimate destination for pixel-perfect fun and timeless excitement. 
                    Join us and let the adventure begin!
                </p>
            </div>
            <div className={`w-[50%] md:ml-[100px] max-md:mb-5 max-md:mt-10`}>
                <Image
                className="w-auto h-auto rounded drop-shadow-md"
                src="/img/arkadegfx_about1.jpg"
                width={500}
                height={500}
                alt="About Us Image"
                title="About Us"/>
            </div>
        </div>
    )
}

export default AboutPage;