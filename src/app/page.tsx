import { DockDemo } from "@/components/dockdemo/dock-demo";
import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import Image from "next/image";
import BarberPole from "@/../public/barber-pole.png";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen bg-background">
      <section className="h-full flex sm:flex-row flex-col py-3 justify-center items-center">
        <div className=" w-1/4">
          <Image
            src={BarberPole}
            alt="barber-logo"
            className="object-cover animate-aurora"
          />
        </div>
        <div className=" flex flex-col justify-content-center items-center">
          <WordRotate
            words={["Hola 👋", "Bienvenido a"]}
            className="text-lg text-balance font-semibold hidden sm:block"
          />
          <BoxReveal boxColor={"#18181b"} duration={0.5} >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter flex space-x-2">
              <p>NorthFade</p>
              <AuroraText colors={["#FF0000", "#FFFFFF", "#0000FF"]} >
                Barber
              </AuroraText>
            </h1>
          </BoxReveal>
          <DockDemo />
        </div>
      </section>
    </main>
  );
}
