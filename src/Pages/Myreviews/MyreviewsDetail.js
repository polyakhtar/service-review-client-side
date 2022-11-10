import React from 'react';
import { Link } from 'react-router-dom';

const MyreviewsDetail = ({myreview,handleDelete,handleUpdate}) => {
    console.log(myreview)
    const {_id,customer,photoUrl,message}=myreview;
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
          <button className='btn btn-primary'><Link to={`/updatereview/${myreview._id}`}>Update</Link></button>
        </td>
        <td>
          <button className='btn btn-warning' onClick={()=>handleDelete(_id)}>Delete</button>
        </td>
      </tr> 
    );
};

export default MyreviewsDetail;