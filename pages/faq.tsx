import fs from "fs";
import path from "path";
import Faqs from "../components/faqs";
import MiscLayout from "../components/miscLayout";

interface CoCPageProps {
  markdownContent: string;
}

export default function CoCPage({ markdownContent }: CoCPageProps) {
  return (
    <MiscLayout>
      <Faqs markdownContent={markdownContent} />
    </MiscLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "faq.md");
  let markdownContent = fs.readFileSync(filePath, "utf8");

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, "");

  return {
    props: {
      markdownContent,
    },
  };
}
