import Head from "next/head";
import WorkgroupLeads from "../../components/workgroupLeads";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function WorkgroupLeadsPage() {
  return (
    <>
      <Head>
        <title>PyCon India 2023, Hyderabad | Meet Our Workgroup Leads</title>
      </Head>
      <Header />
      <WorkgroupLeads />
      <Footer />
    </>
  );
}
