import Image from "next/image";
import { Inter } from "next/font/google";
import PyConIndia from "./pycon-landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <PyConIndia />
    </div>
  );
}
