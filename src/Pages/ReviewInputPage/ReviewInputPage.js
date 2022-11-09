import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewInputPage = () => {
    const {_id,name}=useLoaderData();
    const {user}=useContext(AuthContext);
    const handlePlaceReview=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=user?.email || 'Please Log In To Add Review';
        const photoUrl=form.photoUrl.value;
        const message=form.message.value;
        const review={
            service_id:_id,
            customer:name,email,photoUrl,message
        }
    
    fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.acknowledged){
            alert('Review Added Successfully');
            form.reset();
        }
    })
    
   }
    return (
        <form onSubmit={handlePlaceReview}>
         <h2 className='text-3xl'>Service Name : {name}</h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
<input name='name' type="text" placeholder="Name" className="input w-full input-bordered" />
<input name="photoUrl" type="text" placeholder="PhotoUrl" className="input w-full  input-bordered" />
<input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input w-full input-bordered" readOnly/>
</div>
<textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
<button className='btn btn-primary'>Add review</button>
</form>
    );
};

export default ReviewInputPage;