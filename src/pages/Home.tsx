import Hero from '@/components/sections/Hero';
import CredibilityStrip from '@/components/sections/CredibilityStrip';
import Capabilities from '@/components/sections/Capabilities';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import HowIWork from '@/components/sections/HowIWork';
import Skills from '@/components/sections/Skills';
import CurrentlyExploring from '@/components/sections/CurrentlyExploring';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Capabilities />
      <FeaturedProjects />
      <Experience />
      <About />
      <HowIWork />
      <Skills />
      <CurrentlyExploring />
      <Testimonials />
      <Contact />
    </>
  );
}
