import React from 'react';
import Photo from '../Photo/Photo';
import Services from '../Services/Services';
import About from './About/About';
import Slider from './Slider/Slider';
import Contact from './Contact/Contact';
import Review from './Review/Review';
import Features from './Features/Features';
import Discount from './Discount/Discount';
import Team from './Team/Team';
import CTA from './CTA/CTA';


const Home = () => {

    return (
        <div>
           <Slider></Slider>
           <Services></Services>
           <Discount></Discount>
           <Photo></Photo>
           <Contact></Contact>
           <About></About>
           <Review></Review>
           <Features></Features>
           <Team></Team>
           <CTA></CTA>
        </div>
    );
};

export default Home;