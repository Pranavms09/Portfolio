import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-primary bg-background mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-margin-desktop py-8 max-w-container-max mx-auto gap-8">
        <div className="text-label-bold font-black text-primary uppercase text-center md:text-left">
          © {currentYear} PRANAV SURYAWANSHI. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
