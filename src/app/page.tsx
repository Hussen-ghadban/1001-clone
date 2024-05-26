'use client'


import { useQuery } from '@tanstack/react-query';
import CardMovie from '../component/CardMovie';
import Ho from '../component/Ho';
import Search from './search/page';

 export default function Home() {

  const { data, error, isLoading } = useQuery({
    queryKey:['movies'],
    queryFn: () => {
      return fetch('https://mangopulse.net/1001-data.json').then(response => response.json());
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


const movie1=data[1];
const movie2=data[2];
const movie3=data[3];
const movie4=data[4];
const movie5=data[5];
const movie6=data[6];
const movie7=data[7];
const movie8=data[8];
const movie9=data[9];
const movie10=data[10];
const movie11=data[11];
const movie12=data[12];
const movie13=data[13];
const movie14=data[14];
const movie15=data[15];
const movie16=data[16];
const movie17=data[17];
const movie18=data[18];







  return (
    <div>
      <Ho/>
  {/* <Search/> */}
 <CardMovie DataObject={movie1}/>
 <CardMovie DataObject={movie2}/>
 <CardMovie DataObject={movie3}/>
 <CardMovie DataObject={movie4}/>
 <CardMovie DataObject={movie5}/>
 <CardMovie DataObject={movie6}/>
 <CardMovie DataObject={movie7}/>
 <CardMovie DataObject={movie8}/>
 <CardMovie DataObject={movie9}/>
 <CardMovie DataObject={movie10}/>
 <CardMovie DataObject={movie11}/>
 <CardMovie DataObject={movie12}/>
 <CardMovie DataObject={movie13}/>
 <CardMovie DataObject={movie14}/>
 <CardMovie DataObject={movie15}/>
 <CardMovie DataObject={movie16}/>
 <CardMovie DataObject={movie17}/>
 <CardMovie DataObject={movie18}/> 
    </div>
  );
}
