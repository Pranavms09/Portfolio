'use client';

import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const projects = [
  {
    id: 2,
    title: 'LifePulse',
    description: 'Offline-ready healthcare platform for rural India featuring a 24/7 Gemini AI-powered bilingual assistant, hands-free voice interface, and camera-based medicine analyser.',
    image: '/images/neural_graph_v2.jpeg',
    tags: ['Gemini AI', 'PWA', 'Capacitor.js', 'Firebase', 'Tailwind'],
    linkText: 'GitHub Repository',
    link: 'https://github.com/Pranavms09/LifePulse',
    isDoc: false,
  },
  {
    id: 3,
    title: 'Krishi Mitra',
    description: 'A smart agriculture platform compiling real-time mandi crop rates to eliminate information asymmetry and facilitate buyer comparisons for local farmers.',
    image: '/images/campus_flow.jpeg',
    tags: ['Python', 'JavaScript', 'REST API', 'HTML5', 'CSS3'],
    linkText: 'GitHub Repository',
    link: 'https://github.com/Pranavms09/Krishi_Mitra',
    isDoc: false,
  },
];

export default function Projects() {
  const [activeCardId, setActiveCardId] = React.useState<number | null>(null);

  return (
    <section className="py-24 border-t-2 border-primary bg-background" id="projects">
      <h2 className="text-headline-lg uppercase mb-12">Featured Projects</h2>
      <ScrollReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ '--delay': `${idx * 150}ms` } as React.CSSProperties}
              className="group neo-border bg-background neo-shadow neo-card-hover cursor-pointer"
              onClick={() => setActiveCardId(activeCardId === project.id ? null : project.id)}
            >
              <div className="h-48 overflow-hidden border-b-2 border-primary relative">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={project.id === 2}
                  className={`object-cover transition-all duration-300 group-hover:scale-105 ${
                    activeCardId === project.id
                      ? 'grayscale-0 brightness-100'
                      : 'grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0'
                  }`}
                />
              </div>
              <div className="p-8">
                <h3 className="text-headline-md uppercase mb-4">{project.title}</h3>
                <p className="text-on-surface-variant text-body-md mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-label-bold neo-border px-2 py-1 uppercase bg-background text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="inline-flex items-center gap-2 text-label-bold uppercase hover:underline group/link"
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {project.linkText}
                  {project.isDoc ? (
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
