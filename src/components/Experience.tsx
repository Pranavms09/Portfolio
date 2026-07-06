import React from 'react';

const experiences = [
  {
    role: 'Technical Team Member',
    organization: 'AWS Student Builder Group NMIET',
    duration: 'Apr 2026 – Present',
    location: 'Pune',
    bullets: [
      'Contributed to cloud computing initiatives and student community development; built AWS-based demo projects.',
      'Participated in workshops and promoted hands-on cloud learning among peers at NMIET.',
    ],
  },
  {
    role: 'Open-Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC)',
    duration: 'May 2026 – Present',
    bullets: [
      'Actively contributing to open-source repositories under the GSSoC 2026 program.',
    ],
  },
  {
    role: 'Open-Source Contributor',
    organization: 'Nexus Spring of Code',
    duration: 'Apr 2026 – May 2026',
    bullets: [
      'Contributed to multiple open-source projects during the Nexus SoC program; code review, bug fixes, and feature additions.',
    ],
  },
  {
    role: 'Finance Manager',
    organization: 'TEDxNMIET',
    duration: 'May 2026 – Present',
    bullets: [
      'Managing end-to-end financial operations for the TEDxNMIET event — budgeting, vendor payments, and sponsorship tracking.',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech — Computer Science & Information Technology',
    institution: "PCET's Nutan Maharashtra Institute Of Engineering And Technology, Talegaon Dabhade (SPPU)",
    duration: 'Sep 2025 – Oct 2029',
    location: 'Pune',
    details: 'Relevant coursework: Data Structures & Algorithms, OOP, Web Technologies, Cloud Computing.',
  },
  {
    degree: 'Higher Secondary (Science)',
    institution: 'Yogeshwari Nutan Vidyalaya, Ambajogai',
    duration: '2013 – 2023',
    location: 'Beed',
  },
];

export default function Experience() {
  return (
    <section className="py-24 border-t-2 border-primary bg-background" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Experience Column */}
        <div className="lg:col-span-7">
          <h2 className="text-headline-lg uppercase mb-12">Experience &amp; Activities</h2>
          <div className="relative border-l-2 border-zinc-800 ml-4 pl-8 space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Milestone Indicator */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-200"></div>
                
                {/* Content */}
                <div className="space-y-2">
                  <div className="font-mono text-label-bold text-zinc-500 uppercase tracking-wider">
                    {exp.duration} {exp.location ? `| ${exp.location}` : ''}
                  </div>
                  <h3 className="text-headline-md uppercase text-primary font-mono leading-tight">
                    {exp.role}
                  </h3>
                  <div className="font-label-bold text-sm text-zinc-400 uppercase tracking-wide">
                    {exp.organization}
                  </div>
                  <ul className="list-disc pl-4 text-on-surface-variant text-body-md space-y-1.5 mt-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="lg:col-span-5">
          <h2 className="text-headline-lg uppercase mb-12">Education</h2>
          <div className="relative border-l-2 border-zinc-800 ml-4 pl-8 space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="relative group">
                {/* Milestone Indicator */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-200"></div>
                
                {/* Content */}
                <div className="space-y-2">
                  <div className="font-mono text-label-bold text-zinc-500 uppercase tracking-wider">
                    {edu.duration} {edu.location ? `| ${edu.location}` : ''}
                  </div>
                  <h3 className="text-headline-md uppercase text-primary font-mono leading-tight">
                    {edu.degree}
                  </h3>
                  <div className="font-label-bold text-sm text-zinc-400 uppercase tracking-wide">
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <p className="text-on-surface-variant text-body-md mt-2">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
