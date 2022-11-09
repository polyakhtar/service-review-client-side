import React from 'react';

const MyreviewsDetail = ({myreview,handleDelete,handleUpdate}) => {
    const {_id,customer,photoUrl,message,status}=myreview;
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <span className="text-2xl font-bold badge badge-ghost badge-sm">{customer}</span>
        </td>
        <td className='text-1xl'>{message}</td>
        <td>
          <button className='btn btn-primary' onClick={()=>handleUpdate(_id)}>{status?status:"Update"}</button>
        </td>
        <td>
          <button className='btn btn-warning' onClick={()=>handleDelete(_id)}>Delete</button>
        </td>
      </tr> 
    );
};

export default MyreviewsDetail;