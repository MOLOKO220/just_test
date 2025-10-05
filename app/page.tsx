import BuildObjects from "./component/BuildObjects/BuildObjects";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

export default function page() {
  return (
    <main>
      <Header />
      <BuildObjects />
      <Footer />
    </main>
  );
}
