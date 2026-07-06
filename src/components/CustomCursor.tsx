'use client';

import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      // High-performance direct DOM style updates bypassing React render state cycle
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      isVisible = false;
    };

    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      isVisible = true;
    };

    const addHoverClass = () => {
      cursor.classList.add('cursor-hover');
    };

    const removeHoverClass = () => {
      cursor.classList.remove('cursor-hover');
    };

    const setupListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"], label, select').forEach((el) => {
        el.addEventListener('mouseenter', addHoverClass);
        el.addEventListener('mouseleave', removeHoverClass);
      });
    };

    setupListeners();

    // Re-bind listeners when the DOM tree updates (e.g. reveal toggles, scroll modules)
    const observer = new MutationObserver(setupListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none bg-white z-[9999] w-6 h-6 -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-200 ease-out"
      style={{
        mixBlendMode: 'difference',
        opacity: 0,
      }}
    />
  );
}
