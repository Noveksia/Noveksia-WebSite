import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Audience } from "@/components/Audience";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Audience />
        <Process />
        <Results />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
