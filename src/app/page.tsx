import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
