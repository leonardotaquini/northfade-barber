import { ServiceCard } from "@/components/barber-service/service-card";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { MorphingText } from "@/components/magicui/morphing-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Navbar } from "@/components/navbar/navbar";
import { Services } from "@/interfaces/services.interface";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BarberShopPage() {
  const services: Services[] = [
    {
      id: 1,
      name: "Northfade 1",
      description: "Corte",
      duration: 60,
      price: 8000,
    },
    {
      id: 2,
      name: "Northfade 2",
      description: "Corte + Barba",
      duration: 60,
      price: 10000,
    },
    {
      id: 3,
      name: "Northfade 3",
      description: "Barba",
      duration: 60,
      price: 5000,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="h-screen grid grid-cols-12">
        <section className="h-[75vh] sm:h-full col-span-12 sm:col-span-6 grid place-items-center">
          <BoxReveal boxColor={"#18181b"} duration={0.5} width="100%">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-center flex flex-col justify-center items-center">
              Nuestros Servicios ✂️
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 m-auto"
              >
                <ArrowLeft className="w-5 h-5 inline-block mr-2 " />
              </Link>
            </h2>
          </BoxReveal>
        </section>
        <section className="h-full col-span-12 sm:col-span-6">
          <div className="flex flex-col justify-around p-2 h-full space-y-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
