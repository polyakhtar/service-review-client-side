import { useState } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewData from "../ReviewData/ReviewData";

const ServiceCardDetail = () => {
  const {user}=useContext(AuthContext)
const serviceCardDetailData=useLoaderData();  
const [reviews,setReviews]=useState([]);
console.log(reviews)
// const{_id,name}=reviews;
fetch(`http://localhost:5000/reviews/`)
.then(res=>res.json())
.then(data=>{
  setReviews(data)
})
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
      <div>
            <h2>You have {reviews.length} Review</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
     {
reviews.map(review=><ReviewData
                 key={review._id}
                 order={review}
                 ></ReviewData>)
     } 
      
    </tbody>
    
    <tfoot>
      
    </tfoot>
    
  </table>
</div>
        </div>
        { user?.email?
        <Link to={`/reviewinputpage/${serviceCardDetailData._id}`}>Go To Add Review</Link>
         :
         <Link to='/login'> Please Log In</Link>
        }
        
      </div>
      
    );
};

export default ServiceCardDetail;