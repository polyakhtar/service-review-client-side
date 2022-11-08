import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard2 = ({service2}) => {
    const {img,price,description,name}=service2;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
            <PhotoView src={img}>
            <img src={img} alt="Shoes" className="rounded-xl" />
            </PhotoView>
          </PhotoProvider>
          
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <p>{description}</p>
      
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard2;