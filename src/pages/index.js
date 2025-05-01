import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>


<div className="flex justify-center items-center -my-8 px-4">
  <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
    
    {/* Image Div */}
    <div className="order-1 md:order-2 flex justify-center md:justify-end animate-float">
      <Image
        src="/image/main.gif"
        alt="Softwings Logo"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>

    {/* Text Div */}
    <div className="order-2 md:order-1 text-center">
      <h1 className="text-[24px]  md:text-5xl font-bold tracking-tight">Let's Sprout the</h1>
      <h1 className="text-[24px]  md:text-5xl font-bold tracking-tight">Software Wingz in You</h1>
      <h1 className="text-[24px]  md:text-5xl font-bold tracking-tight">Business</h1>
      <button className="mt-5">
        <a className="text-[#1B577E] border-2 border-[#1B577E] bg-white text-lg px-10 py-3 rounded-3xl hover:bg-[#1B577E] hover:text-white transition">
          Get Started
        </a>
      </button>
    </div>

  </div>
</div>


      <div style={{ backgroundColor: '#1B577E' }} className="overflow-hidden  text-white mt-20 whitespace-nowrap">
        <div className="inline-block animate-marquee hover:[animation-play-state:paused] px-4 py-5 font-bold text-xl uppercase">
          SoftWingz is not just an IT company, but your partner in growth.
        </div>
      </div>

      
    </div>
  );
}



