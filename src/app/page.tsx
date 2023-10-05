import React from 'react';
import ThemeButton from '@/components/ThemeButton';
import Footer from '@/components/Footer';

export default function page() {
  
  return (
    <main>
      <div className='flex flex-col items-center justify-center h-screen gap-8'>
        <div>
          <h1 className='text-7xl font-bold text-center rainbow-text'>Hello World</h1>
          <h3 className='text-2xl font-bold text-center'>Coming Soon...</h3>
        </div>
        <ThemeButton />
        <Footer />
      </div>
    </main>
  )
}