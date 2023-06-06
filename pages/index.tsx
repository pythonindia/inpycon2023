import { useMediaQuery } from '@mui/material';
import { Inter } from "next/font/google";
import PyConIndiaWeb from "./pycon-landing";


const inter = Inter({ subsets: ["latin"] });

type componentProps = {
  isMobile: boolean;
};

export default function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <PyConIndiaWeb />
  );
}
