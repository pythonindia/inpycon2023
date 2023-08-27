import Head from "next/head";
import fs from "fs";
import path from "path";
import TinkeringSpace from "../components/tinkeringSpace";
import MiscLayout from "../components/miscLayout";

interface TinkeringSpacePageProps {
  markdownContent: string;
}

export default function TinkeringSpacePage({ markdownContent }: TinkeringSpacePageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | Tinkering Space</title>
      </Head>
      <TinkeringSpace markdownContent={markdownContent} />
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "tinkeringSpace.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
