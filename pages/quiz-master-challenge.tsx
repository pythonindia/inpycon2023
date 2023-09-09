import Head from "next/head";
import QuizGame from "../components/quizGame";
import Header from "../components/header";
import Footer from "../components/footer";

export default function QuizGamePage() {
  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | QuizMaster Challenge</title>
      </Head>
      <Header />
      <QuizGame />
      <Footer />
    </>
  );
}
