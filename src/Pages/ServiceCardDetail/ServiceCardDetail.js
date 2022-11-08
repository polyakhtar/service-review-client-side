import { useLoaderData } from "react-router-dom";



const ServiceCardDetail = () => {
const serviceCardDetailData=useLoaderData();  
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl mb-8 mx-auto">
        <figure className="px-10 pt-10">
            <img src={serviceCardDetailData.img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{serviceCardDetailData.name}</h2>
          <p>Price : {serviceCardDetailData.price}</p>
          <p>{serviceCardDetailData.description}</p>
        </div>
      </div>
      </div>
    );
};

export default ServiceCardDetail;