import React from 'react'
import Image from 'next/image';

export default async function Ho() {

  const res = await fetch(
    'https://mangopulse.net/1001-data.json'
  );
  const movie = await res.json();

const movie1=movie[0];
// console.log(movie)
  return (

   <div className='relative '>
     <div className="relative w-full h-screen">
      <img src={movie1.videos[0].bannerImage} alt="Home Page Image" className="absolute inset-0 object-cover w-full h-full" />
    </div>

    <div className='flex gap-x-5 absolute bottom-10 right-28 border-2 w-5/12 p-5 rounded-2xl'>
  {    movie1.videos.map((m:any)=>(
  <div key={m.name} className=''>
    <div className="im">
              <img src={m.portraitImage} alt="" className="rounded-md h-40"/>
  
                   </div>
  </div>
      ))}
      
    </div>
   </div>
  )
}
    