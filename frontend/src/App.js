import { About, Header, Footer, Work, Skills, Testimonial } from "./container";
import { Navbar } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}
