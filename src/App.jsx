import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands/Brands";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Banner2 from "./components/banner/Banner2";
import Testimonial from "./components/testimonial/Testimonial";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default App;