import Image from "next/image";
import { Rubik_Mono_One } from "next/font/google";

const rubikMonoOne = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 underline">ArkadeGFX</h1>
    </main>
  );
}
