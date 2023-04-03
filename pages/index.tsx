import { Inter } from "next/font/google";
import PyConIndiaWeb from "./pycon-landing";
import PyConIndiaMobile from "./pycon-mobile";

const inter = Inter({ subsets: ["latin"] });

type componentProps = {
  isMobile: boolean;
};

export default function Home({ isMobile }: componentProps) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* switch to show mobile layout for mobile, detection code below */}
      {isMobile ? <PyConIndiaMobile /> : <PyConIndiaWeb />}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      isMobile,
    },
  };
}
