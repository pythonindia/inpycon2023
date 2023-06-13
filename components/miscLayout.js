import Header from "../components/header";
import Footer from "../components/footer";

export default function MiscLayout({ children }) {
  return (
    <>
      <Header />
      <div className="misc-container">{children}</div>
      <Footer />
    </>
  );
}
