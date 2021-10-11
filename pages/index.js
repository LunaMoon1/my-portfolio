import "tailwindcss/tailwind.css";

import PageTitle from "../components/page-title";
import Footer from "../components/footer";
import Header from "../components/header";
import MainContent from "../components/main-content";

export default function Home() {
  return (
    <>
      <PageTitle title="Anindya Dey | Full-stack Developer" />
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
