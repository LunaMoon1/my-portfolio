import { Navbar, Header, About, Work, Skills, Testimonial, Footer } from "./components";

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
