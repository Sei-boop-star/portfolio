import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trouble from "@/components/Trouble";
import CaseStudies from "@/components/CaseStudies";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Trouble />
      <CaseStudies />
      <Capabilities />
      <Process />
      <Profile />
      <Contact />
      <Footer />
    </main>
  );
}
