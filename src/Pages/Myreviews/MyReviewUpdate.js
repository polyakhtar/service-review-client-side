import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReviewUpdate = () => {
    const storedReview=useLoaderData();
    const [review,setReview]=useState(storedReview);
    const handleUpdateReview=event=>{
        event.preventDefault();
        fetch(`https://wedding-photographer-assignment-server.vercel.app/myreviews/${storedReview._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // setReview(data)
            if(data.acknowledged){
                alert('Review Updated Successfully');
                
            }
        })

    }
    const handleOnChange=event=>{
        event.preventDefault();
        const value=event.target.value;
        const field=event.target.name;
        const newReview={...review};
        newReview[field]=value;
        setReview(newReview);

    }
    return (
        <form onSubmit={handleUpdateReview}>
<input onChange={handleOnChange} defaultValue={storedReview.photoUrl} name='photoUrl' type="text" placeholder="photoUrl" className="input w-full input-bordered mb-4" />
<input onChange={handleOnChange} defaultValue={storedReview.customer} name="name" type="text" placeholder="name" className="input w-full  input-bordered mb-4" />
<input onChange={handleOnChange} defaultValue={storedReview.message} name="message" type="text" placeholder="Message" className="input w-full input-bordered mb-4" readOnly/>
<div className='text-center my-8'>
<button className='btn btn-primary '>Update Review</button>
</div>
</form>
    );
};

export default MyReviewUpdate;