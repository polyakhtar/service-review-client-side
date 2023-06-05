import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
const Services = () => {
const {data:services=[],isLoading}=useQuery({
    queryKey:['Services'],
    queryFn:async()=>{
      const res=await fetch('https://wedding-photographer-assignment-server.vercel.app/services');
      const data=await res.json();
      return data;
    }
  })

    return (
        <div className="text-center py-10">
  <p className='text-3xl font-bold text-orange-600 m-4'>Services</p>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8'>
    {
     services.map(service=><ServiceCard
     key={service._id}
     service={service}
     isLoading={isLoading}
     ></ServiceCard>)   
    }
  </div>
  <button className="btn btn-primary mt-10"><Link to='/services2'>View All</Link></button>
</div>
    );
};

export default Services;