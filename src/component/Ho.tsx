'use client'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Ho() {

  const { data, error, isLoading } = useQuery({
    queryKey:['movies'],
    queryFn: () => {
      return fetch('https://mangopulse.net/1001-data.json').then(response => response.json());
    },
  });
  const [source,setSource]=useState(data[0].videos[0].bannerImage)
  const [name,setName]=useState(data[0].videos[0].name)
  const [genres,setGenres]=useState(data[0].videos[0].genres)
  const [year,setYear]=useState(data[0].videos[0].year)
  const [description,setDescription]=useState(data[0].videos[0].description)



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

const handeImage=(bannerImage:string,name:String,genres:string,year:number,description:string)=>{
setSource(bannerImage),
setName(name),
setYear(year),
setGenres(genres)
setDescription(description)
}
const movie1=data[0];
console.log(movie1)
  return (
   <div className='relative '>
     <div className="relative w-full h-screen">
      <img src={source} alt="Home Page Image" className="absolute inset-0 object-cover w-full h-full shadow-lg opacity-60" />
    </div>

    <div className='flex gap-x-4 absolute -bottom-10 md:bottom-14 right-5 md:right-28 border-2 w-11/12 md:w-5/12 p-5 rounded-2xl'>
  {    movie1.videos.map((m:any)=>(
  <div key={m.name} className='' onClick={()=>handeImage(m.bannerImage,m.name,m.genres,m.year,m.description)}>
              <img src={m.portraitImage} alt="" className="rounded-md h-40"/>
  </div>
      ))}      
    </div>
      <div className='absolute left-10 text-white md:bottom-14 bottom-52 w-5/12 bg-transparent '> 
        <h1 className='text-3xl font-bold mb-5 bg-transparent'>{name}|</h1>
      <div className='flex gap-x-2 text-2xl mb-5 bg-transparent'>
      <span className='bg-transparent'>{year}|</span > <p className='bg-transparent'>{genres}|</p>
      </div>

      <h2 className='mb-5 bg-transparent'>{description}</h2>
      <button className='bg-btn text-black p-2 md:p-3 rounded-lg font-bold'> Subscrie now</button>
      <button className='border p-1 md:p-3 rounded-lg  m-1 md:ml-3'>+ Add to favorite</button>
      </div>
   </div>
  )
}
