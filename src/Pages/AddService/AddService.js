import React, { useState } from 'react';

const AddService = () => {
    const [services,setServices]=useState({});
    const handleAddUser=event=>{
        event.preventDefault();
        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(services)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('User created successfully');
                event.target.reset();
            }
        })
        console.log(services)
    }
    const handleInputBlur=event=>{
        const value=event.target.value;
        const field=event.target.name;
        const newServices={...services};
        newServices[field]=value;
        setServices(newServices);
        
    }
    return (
        <div className='w-3/5 mx-auto text-center'>
            <h2>Please add a new service</h2>
            <form onSubmit={handleAddUser}>
            
                <input onBlur={handleInputBlur} name='name' type="text" placeholder="Service Name" className="input w-full input-bordered m-4" requird/>
                <br/>
                <input onBlur={handleInputBlur} name='price' type="text" placeholder="Service Price" className="input w-full input-bordered m-4" requird/>
                <br/>
                <input onBlur={handleInputBlur} name='ratings' type="text" placeholder="Ratings" className="input w-full input-bordered m-4" requird/>
                <br/>
                <input onBlur={handleInputBlur} name='description' type="text" placeholder="Description" className="input w-full input-bordered m-4" requird/>
                <br/>
                <input onBlur={handleInputBlur} name='img' type="text" placeholder="Image Url" className="input w-full input-bordered m-4" requird/>
                <br/>

                <button className='btn btn-primary mb-4'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;