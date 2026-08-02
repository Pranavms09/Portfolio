import React from 'react';

const skills = [
  'Java',
  'Python',
  'C',
  'JavaScript',
  'TypeScript',
  'React 19',
  'Next.js',
  'Node.js',
  'Cloud Firestore',
  'Gemini AI',
  'AWS',
  'Git',
  'Vercel',
  'PWA',
];

export default function About() {
  return (
    <section className="py-24 border-t-2 border-primary bg-background" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-5">
          <h2 className="text-headline-lg uppercase mb-8">About Me</h2>
          <p className="text-body-lg text-on-surface-variant mb-6">
            First-year BTech CS student at PCET's Nutan Maharashtra Institute Of Engineering And Technology (SPPU) with hands-on experience building full-stack web applications, AI-integrated platforms, and cloud-native tools.
          </p>
          <p className="text-body-lg text-on-surface-variant">
            Actively contributing to open-source repositories (GSSoC, NSoC) and serving as a Technical Team Member for AWS Student Builder Group NMIET. I focus on developing clean, maintainable, and scalable systems.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="bg-background neo-border neo-shadow p-8 h-full">
            <h3 className="text-label-bold uppercase mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              Knowledge Base
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="neo-border px-4 py-2 bg-background text-primary text-label-bold uppercase hover:bg-primary hover:text-background transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
