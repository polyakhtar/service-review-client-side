import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
import ServiceCard2 from '../ServiceCard2/ServiceCard2';


const Services2 = () => {
    // const [services2,setServices2]=useState([]);
    // useEffect(()=>{
    //     fetch('https://wedding-photographer-assignment-server.vercel.app/services2')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setServices2(data);
    //     })
    // },[services2])
    const {data:services2=[],isLoading}=useQuery({
        queryKey:['Services'],
        queryFn:async()=>{
          const res=await fetch('https://wedding-photographer-assignment-server.vercel.app/services2');
          const data=await res.json();
          return data;
        }
      })
    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 mx-8'>
            {
                services2.map(service2=><ServiceCard2
                key={service2._id}
                service2={service2}
                isLoading={isLoading}
                ></ServiceCard2>)
            }
            
        </div>
    );
};

export default Services2;