import About from "./components/about/About";
import BigHeader from "./components/bigheader/BigHeader";
import Esperience from "./components/esperience/Esperience";
import Header from "./components/header/Header";
import Service from "./components/services/Service";
import Project from "./components/projects/Project";
import Prices from "./components/prices/Prices";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <BigHeader />
      <About />
      <Esperience />
      <Service />
      <Project />
      <Prices />
      <Newsletter />
      <Footer />
    </main>
  );
}
