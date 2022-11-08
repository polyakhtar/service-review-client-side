import React from 'react';
import Photo from '../Photo/Photo';
import Services from '../Services/Services';
import About from './About/About';
import Slider from './Slider/Slider';


const Home = () => {

    return (
        <div>
        
           <Slider></Slider>
           <Services></Services>
           <Photo></Photo>
           <About></About>
           
        
        </div>
    );
};

export default Home;