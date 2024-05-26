'use-client'
import { useQuery } from '@tanstack/react-query';

import Link from 'next/link';
import React from 'react';
import { CiSearch } from "react-icons/ci";

export default async function Search() {

  const res = await fetch(
    'https://mangopulse.net/1001-data.json'
  );
  const movie = await res.json();


  const movies=movie[1].videos.slice(0, 10);



 
  return (
  <div className='w-full px-4 py-4 mt-20 '>
      <div className='flex justify-between items-center w-full'>
      <div className='relative flex-grow'>
        <input 
          type="text" 
          placeholder='Search...' 
          className='pl-10 pr-3 py-4 w-full border rounded-lg bg-search text-white'
        />
        <CiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500  bg-search' />
      </div>
      <Link href={'/'}>
      <h1 className='ml-4 text-green-600' >back</h1></Link>
    </div>
    <h1 className='sm:text md:text-xl lg:text-2xl text-white'>Most searched</h1>
    <div className="flex flex-wrap justify-start items-start">
      {  
        movies.map((m:any)=>(
            <div key={m.name} className="w-1/5 p-3">
                
                 
            <img src={m.bannerImage} alt="" className=""/>
            </div>
        ))
        }
        </div>
  </div>
  );
}
