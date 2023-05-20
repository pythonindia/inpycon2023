import { useMediaQuery } from '@mui/material';
import { Inter } from "next/font/google";
import PyConIndiaWeb from "../components/pycon-landing";
import PyConIndiaMobile from "../components/pycon-mobile";


const inter = Inter({ subsets: ["latin"] });

type componentProps = {
  isMobile: boolean;
};

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div className="relative isolate px-4 pt-8 lg:px-8 lg:pt-2">
      {/* switch to show mobile layout for mobile, detection code below */}
      {isMobile ? <PyConIndiaMobile /> : <PyConIndiaWeb />}
    </div>
  );
}
