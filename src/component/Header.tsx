"use client"

import React, { useState, useEffect } from 'react';
import Drop from './Drop';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full text-white flex justify-between items-center px-4  z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
      <div className="flex md:gap-x-5 items-center text-xs sm:text-sm gap-x-1 sm:gap-x-2 md:text-xl lg:text-2xl bg-transparent">
        <Link className='bg-transparent' href={'/'}><div className='bg-transparent'>Home</div></Link>
        <div className='bg-transparent'>Series</div>
        <div className='bg-transparent'>TV Shows</div>
        <div className='bg-transparent'>Documentaries</div>
        <div className='bg-transparent'>Kids</div>
      </div>
      <div className="flex items-center bg-transparent gap-x-1  md:gap-x-2">
        <Link className='bg-transparent' href={'/search'} >
        <CiSearch className='bg-transparent ml-2 text-lg md:text-2xl'/>
        </Link>
        <Drop />
        <div className='bg-transparent pr-1 md:pr-4  text-2xl md:text-3xl'><CgProfile className='bg-transparent'/></div>
      </div>
    </div>
  );
}
