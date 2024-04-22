import Image from "next/image";
import { Rubik_Mono_One } from "next/font/google";

const rubikMonoOne = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={rubikMonoOne.className}>
      <div id="headerSection">

      </div>
    </main>
  );
}
