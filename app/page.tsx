import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { Pillars } from "../components/pillars";
import { AgentHive } from "../components/agenthive";
import { HowItWorks } from "../components/how-it-works";
import { Architecture } from "../components/architecture";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <AgentHive />
        <HowItWorks />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
