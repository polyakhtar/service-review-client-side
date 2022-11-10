import React from 'react';

const ReviewData = ({review}) => {
  console.log(review)
const {customer,photoUrl,message}=review
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
      
    </tr>
         
    );
};

export default ReviewData;