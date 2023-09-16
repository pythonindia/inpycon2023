import Head from "next/head";
import Volunteers from "../../components/volunteers";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function VolunteersPage() {
  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | Volunteers</title>
      </Head>
      <Header />
      <Volunteers />
      <Footer />
    </>
  );
}
