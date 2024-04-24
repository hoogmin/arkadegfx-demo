import Image from "next/image";
import { Rubik_Mono_One } from "next/font/google";

const rubikMonoOne = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={rubikMonoOne.className}>
      <div className="relative overflow-hidden home-section">
        <div className="absolute inset-0 bg-[url('/img/banner1.jpg')] bg-cover bg-center brightness-50"></div>
        <div className="home-section-content relative z-10 flex flex-col md:flex-row justify-center items-center">
          <Image
          src="/img/logo.png"
          width={300}
          height={200}
          alt="ArkadeGFX Logo"
          title="ArkadeGFX Logo"/>
          <p className="text-uppercase text-2xl w-[300px] drop-shadow-lg mb-5">
            Games, Parties, And Competition. Game Like it's 99.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden home-section">
        <div className="absolute inset-0 bg-[url('/img/banner2.jpg')] bg-cover bg-center brightness-50"></div>
        <div className="home-section-content relative z-10 flex flex-col md:flex-row justify-left max-sm:justify-center items-center w-full">
          <p className="text-uppercase text-2xl w-[300px] drop-shadow-lg md:ml-[220px] max-md:mt-50">
            Perfect neon atmosphere. Lose yourself for hours with no sense of time.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden home-section">
        <div className="absolute inset-0 bg-[url('/img/banner3.jpg')] bg-cover bg-center brightness-50"></div>
        <div className="home-section-content relative z-10 flex flex-col md:flex-row justify-right max-sm:justify-center items-center w-full">
          <p className="text-uppercase text-2xl w-[300px] drop-shadow-lg md:mr-[220px] max-md:mt-50">
            Bring the whole family along. There's enough fun for all ages.
          </p>
        </div>
      </div>
    </main>
  );
}
