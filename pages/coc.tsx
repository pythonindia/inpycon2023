import fs from 'fs';
import path from 'path';
import CoC from "../components/coc";
import Header from "../components/header";
import Footer from "../components/footer";

interface CoCPageProps {
  markdownContent: string;
}

export default function CoCPage({ markdownContent }: CoCPageProps) {
  return (
    <>
      <Header />
      <CoC markdownContent={markdownContent} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'coc.md');
  let markdownContent = fs.readFileSync(filePath, 'utf8');

  markdownContent = markdownContent.replace(/^---[\s\S]*?---/g, '');

  return {
    props: {
      markdownContent,
    },
  };
}
