import React from 'react';
import img1 from '../../../assets/slider-image/slider-1.jpg';
import img2 from '../../../assets/slider-image/slider-2.jpg';
import img3 from '../../../assets/slider-image/slider-3.jpg';
import img4 from '../../../assets/slider-image/slider-4.jpg';
import img5 from '../../../assets/slider-image/slider-5.jpg';
import SliderItem from './SliderItem/SliderItem';

const sliderData=[
    {
    image:img1,
    prev:5,
    id:1,
    next:2,
    },
    {
     image:img2,
     prev:1,
     id:2,
     next:3,  
    },
    {
    image:img3,
    prev:2,
    id:3,
    next:4,
    },
    {
    image:img4,
    prev:3,
    id:4,
    next:5,
    },
    {
    image:img5,
    prev:4,
    id:5,
    next:1,
    },
]

const Slider = () => {
    return (
        <div className="carousel w-full py-5">
            {
                sliderData.map(slide=><SliderItem
                key={slide.id}
                slide={slide}
                ></SliderItem>)
            }
            
        </div>
    );
};

export default Slider;