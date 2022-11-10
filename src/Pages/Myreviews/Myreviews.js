import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyreviewsDetail from './MyreviewsDetail';

const Myreviews = () => {
    const {user}=useContext(AuthContext);
    const [myreviews,setMyReviews]=useState([]);
   useEffect(()=>{
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setMyReviews(data)

    })
   },[user?.email])
   const handleDelete=id=>{
    const procced=window.confirm('Are you sure want to delete');
    if(procced){
        fetch(`http://localhost:5000/myreviews/${id}`,{
    method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert('Deleted Successfully');
               const remainingMyReviews=myreviews.filter(rev=>rev._id!==id);
               setMyReviews(remainingMyReviews)
               
            }
        })
    }
        }
     const handleUpdate=id=>{
                fetch(`http://localhost:5000/myreviews/${id}`,{
                    method:"PUT",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify()
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    setMyReviews(data)
                    if(data.modifiedCount){
                        alert('Updated Successfully')
                    }
                })
                }
  
    return (
        <div className="overflow-x-auto w-full my-8 ">
  <table className="table w-full">
    <div>

        {
         myreviews.map(myreview=><MyreviewsDetail
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
