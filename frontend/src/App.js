import { About, Header, Footer, Work, Skills, Testimonial } from "./container";
import { Navbar } from "./components";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
