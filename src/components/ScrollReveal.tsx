'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = '', stagger = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRevealed(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger transition early on both enter and leave
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? 'reveal-stagger' : 'reveal'} ${revealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
