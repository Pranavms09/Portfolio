import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const skillProficiencies = [
  { label: 'Frontend Development', percentage: '85%' },
  { label: 'Backend Engineering', percentage: '75%' },
  { label: 'AI/ML Integration', percentage: '80%' },
  { label: 'Cloud & Databases', percentage: '70%' },
];

export default function Skills() {
  return (
    <section className="py-24 border-t-2 border-primary bg-background" id="skills">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
        <h2 className="text-headline-lg uppercase">Technical Proficiency</h2>
        <div className="max-w-md text-on-surface-variant">
          <p className="text-body-md">
            Self-assessed competency based on academic coursework, independent projects, and lab performance.
          </p>
        </div>
      </div>
      
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Progress Bars */}
          <div className="space-y-8">
            {skillProficiencies.slice(0, 2).map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between font-label-bold uppercase mb-2">
                  <span>{skill.label}</span>
                  <span>{skill.percentage}</span>
                </div>
                <div className="w-full h-6 neo-border bg-background p-1">
                  <div
                    className="h-full bg-primary progress-bar-fill"
                    style={{ '--target-width': skill.percentage } as React.CSSProperties}
                    role="progressbar"
                    aria-valuenow={parseInt(skill.percentage)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column - Progress Bars */}
          <div className="space-y-8">
            {skillProficiencies.slice(2).map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between font-label-bold uppercase mb-2">
                  <span>{skill.label}</span>
                  <span>{skill.percentage}</span>
                </div>
                <div className="w-full h-6 neo-border bg-background p-1">
                  <div
                    className="h-full bg-primary progress-bar-fill"
                    style={{ '--target-width': skill.percentage } as React.CSSProperties}
                    role="progressbar"
                    aria-valuenow={parseInt(skill.percentage)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Skill Icons Row */}
      <ScrollReveal stagger>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div
            style={{ '--delay': '0ms' } as React.CSSProperties}
            className="group flex flex-col items-center p-6 neo-border neo-shadow text-center bg-background hover:bg-primary hover:text-background transition-colors duration-200"
          >
            <svg
              className="w-12 h-12 mb-4 text-primary group-hover:text-background transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-label-bold uppercase">Problem Solving</span>
          </div>

          <div
            style={{ '--delay': '150ms' } as React.CSSProperties}
            className="group flex flex-col items-center p-6 neo-border neo-shadow text-center bg-background hover:bg-primary hover:text-background transition-colors duration-200"
          >
            <svg
              className="w-12 h-12 mb-4 text-primary group-hover:text-background transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <span className="font-label-bold uppercase">Teamwork</span>
          </div>

          <div
            style={{ '--delay': '300ms' } as React.CSSProperties}
            className="group flex flex-col items-center p-6 neo-border neo-shadow text-center bg-background hover:bg-primary hover:text-background transition-colors duration-200"
          >
            <svg
              className="w-12 h-12 mb-4 text-primary group-hover:text-background transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="font-label-bold uppercase">Continuous Learning</span>
          </div>

          <div
            style={{ '--delay': '450ms' } as React.CSSProperties}
            className="group flex flex-col items-center p-6 neo-border neo-shadow text-center bg-background hover:bg-primary hover:text-background transition-colors duration-200"
          >
            <svg
              className="w-12 h-12 mb-4 text-primary group-hover:text-background transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <span className="font-label-bold uppercase">Debugging</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
