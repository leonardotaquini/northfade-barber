import { DockDemo } from "@/components/dockdemo/dock-demo";
import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import Image from "next/image";
import BarberPole from "@/../public/barber-pole.png";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen bg-background">
      <section className="h-full flex py-3 justify-center items-center">
        <div className=" w-1/4">
          <Image
            src={BarberPole}
            alt="barber-logo"
            className="object-fit-contain animate-aurora"
          />
        </div>
        <div className=" flex flex-col justify-content-center items-center">
          <WordRotate
            words={["Hola", "Bienvenido a"]}
            className="text-lg text-balance font-semibold"
          />
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter">
            NorthFade
            <AuroraText colors={["#FF0000", "#FFFFFF", "#0000FF"]}>
              Barber
            </AuroraText>
          </h1>
          <DockDemo />
        </div>
      </section>
    </main>
  );
}
