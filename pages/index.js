import Layout from "../components/Layout";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <About />
      <Experience />
    </Layout>
  );
}
