import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div className="text-center py-10">
  <p className='text-3xl font-bold text-orange-600 m-4'>Services</p>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
     services.map(service=><ServiceCard
     key={service._id}
     service={service}
     ></ServiceCard>)   
    }
  </div>
  <button className="btn btn-primary mt-10"><Link to='/services2'>View All</Link></button>
</div>
    );
};

export default Services;