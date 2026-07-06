import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-primary bg-background mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-margin-desktop py-8 max-w-container-max mx-auto gap-8">
        <div className="text-label-bold font-black text-primary uppercase text-center md:text-left">
          © {currentYear} PRANAV SURYAWANSHI. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-12 text-label-bold uppercase">
          <a
            className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            href="https://github.com/Pranavms09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            href="https://linkedin.com/in/pranavms09"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary underline transition-all duration-200"
            href="https://www.instagram.com/pranavms_09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
