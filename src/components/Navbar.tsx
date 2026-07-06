'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="w-full top-0 sticky bg-background border-b-2 border-primary z-50 neo-shadow">
      <div className="flex justify-between items-center w-full px-4 md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden relative neo-shadow">
            <Image
              alt="Pranav Suryawanshi"
              src="/images/profile.jpeg"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </div>
          <div className="text-headline-md font-display font-black text-primary uppercase tracking-tighter">
            DEV_PORTFOLIO
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-display text-body-lg font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-display text-body-lg font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="font-display text-body-lg font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="font-display text-body-lg font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            href="#contact"
          >
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-3 neo-border bg-background text-primary neo-shadow neo-button-active flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              // Sun Icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.93 4.93l1.59 1.59m10.96 10.96l1.59 1.59M3 12h2.25m13.5 0H21m-16.07 7.07l1.59-1.59M17.22 6.78l1.59-1.59M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
              </svg>
            ) : (
              // Moon Icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background px-6 py-2 font-display font-bold neo-shadow neo-button-active neo-border inline-block text-center hover:bg-background hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary focus:outline-none p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-primary bg-background p-4 flex flex-col gap-4">
          <a
            className="text-body-lg font-bold uppercase py-2 border-b border-zinc-800"
            href="#projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            className="text-body-lg font-bold uppercase py-2 border-b border-zinc-800"
            href="#skills"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            className="text-body-lg font-bold uppercase py-2 border-b border-zinc-800"
            href="#experience"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            className="text-body-lg font-bold uppercase py-2 border-b border-zinc-800"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Theme Toggle mobile */}
          <div className="flex justify-between items-center py-2 border-b border-zinc-800">
            <span className="text-body-lg font-bold uppercase">Theme</span>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 neo-border bg-background text-primary neo-shadow neo-button-active font-label-bold uppercase text-xs cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background text-center py-3 font-display font-bold neo-shadow neo-button-active neo-border mt-2 hover:bg-background hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
