import React from 'react';
import Carousel from '../component/Carousel';

const Slider = () => {

    const slides = [
        {
            title: "Welcome My Blog1",
            content: ()=>(
                    <img src="images/p-01.png" alt="b-01" />
            )
        },
        {
            title: "Welcome My Blog2",
            content: ()=>(
                    <img src="images/p-02.png" alt="b-02" />
            )
        },
        {
            title: "Welcome My Blog3",
            content: ()=>(
                    <img src="images/p-03.png" alt="b-03" />
            )
        },
        {
            title: "Welcome My Blog4",
            content: ()=>(
                    <img src="images/p-04.png" alt="b-04" />
            )
        },
        {
            title: "Welcome My Blog5",
            content: ()=>(
                    <img src="images/p-05.png" alt="b-05" />
            )
        },                        
    ];

    return (
        <div className="container">
            <Carousel 
               slides = {slides}
               speed = { 3000 }
            />
        </div>
    );
};

export default Slider;