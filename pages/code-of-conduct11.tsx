import Head from "next/head";

import fs from "fs";
import path from "path";
import CoC from "../components/coc";
import MiscLayout from "../components/miscLayout";

interface CoCPageProps {
  markdownContent: string;
}

export default function CoCPage({ markdownContent }: CoCPageProps) {
  return (
    <MiscLayout>
      <Head>
        <title>PyCon India 2023, Hyderabad | COC</title>
      </Head>
      <CoC markdownContent={markdownContent} />
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "coc.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
