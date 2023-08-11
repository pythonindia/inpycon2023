import Head from "next/head";
import MiscLayout from "../components/miscLayout";
import Travel from "../components/travel";

export default function TravelPage() {
  return (
    <MiscLayout>
        <Head>
          <title>PyCon India 2023, Hyderabad | Travel</title>
        </Head>
        <Travel />
    </MiscLayout>
  );
}
