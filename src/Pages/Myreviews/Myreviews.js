import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyreviewsDetail from './MyreviewsDetail';

const Myreviews = () => {
    const {user}=useContext(AuthContext);
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })

    },[user?.email])
    const handleDelete=id=>{
        const agree=window.confirm('Are you want to delete this review?');
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`,{
        method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    alert('Deleted Successfully');
                   const remainingReviews=reviews.filter(rev=>rev._id!==id);
                   setReviews(remainingReviews) 
                }
            })
        }
            }
     const handleUpdate=id=>{
                fetch(`http://localhost:5000/reviews/${id}`,{
                    method:"PATCH",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify({status:"Updated"})
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.modifiedCount){
                        alert('Updated Successfully')
                const remaining=reviews.filter(rev=>rev._id!==id);
                const approving=reviews.find(rev=>rev._id===id);
                approving.status='Updated';
                const newReviews=[approving,...remaining];
                setReviews(newReviews);
                    }
                })
                }
  
    return (
        <div className="overflow-x-auto w-full my-8 ">
  <table className="table w-full">
    <div>
        {
         reviews.map(myreview=><MyreviewsDetail
         key={myreview._id}
         myreview={myreview}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
         ></MyreviewsDetail>)  
        }
    </div>
  </table>
</div>
    );
};

export default Myreviews;
