import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";

export const Navbar = () => {
  return (
    <nav className="p-4 shadow animate-pulse">
      <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter flex space-x-2 w-max">
        <p>NorthFade</p>
        <AuroraText colors={["#FF0000", "#FFFFFF", "#0000FF"]}>
          Barber
        </AuroraText>
      </Link>
    </nav>
  );
};
