import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start py-20 relative overflow-hidden bg-background">
      <div className="relative z-10 w-full md:w-2/3">
        {/* Profile photo for mobile */}
        <div className="md:hidden w-32 h-32 rounded-full border-2 border-primary overflow-hidden relative mb-6 neo-shadow">
          <Image
            alt="Pranav Suryawanshi"
            src="/images/profile.jpeg"
            fill
            sizes="128px"
            priority
            className="object-cover"
          />
        </div>
        
        <h1 className="text-display uppercase mb-4 tracking-tight">Pranav Suryawanshi</h1>
        <h2 className="text-headline-lg text-primary mb-6">Full-Stack Developer | AI &amp; Cloud Enthusiast</h2>
        <p className="text-body-lg text-on-surface-variant max-w-xl mb-12">
          First-year BTech CS student at PCET's NMIET building full-stack web applications, AI-integrated platforms, and cloud-native tools. Strong foundation in Java, Python, React, and Node.js.
        </p>
        <div className="flex flex-wrap gap-6 pl-4 py-2">
          <a
            href="#projects"
            className="bg-primary text-on-primary px-10 py-4 text-label-bold uppercase neo-shadow-lg neo-button-active neo-border flex items-center gap-3 hover:bg-background hover:text-primary transition-colors"
          >
            View Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="https://github.com/Pranavms09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-primary px-10 py-4 text-label-bold uppercase neo-shadow-lg neo-button-active neo-border flex items-center gap-3 hover:bg-primary hover:text-background transition-colors"
          >
            GitHub
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Profile Photo Frame for Desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block w-1/3 aspect-[4/5] max-h-[500px] z-10">
        <div className="w-full h-full relative neo-border bg-background neo-shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
          <Image
            alt="Pranav Suryawanshi"
            src="/images/profile.jpeg"
            fill
            sizes="33vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
