import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { IMG_ENDPOINT } from './../constants.js';

function MoviesCarousel (props) {
    const {carouselImages} = props;
    if (carouselImages.length > 0) {
        return (
            <div className="columns carousel_container">
                <div className="carousel_overlay"></div>
                <div className="column is-one-third movies-title-column">
                    <div className="title movies-title">Movies Browser</div>
                </div>
                <Carousel
                    autoPlay={true}
                    showArrows={false}
                    dynamicHeight={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    useKeyboardArrows={false}
                    stopOnHover={false}
                    interval={3500}
                    height={200}
                    className="column"
                >
                    {carouselImages.map((imagePath, index)=> {
                        return (
                            <div key={index}>
                                <img src={IMG_ENDPOINT + imagePath} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        );    
    } else return null;
}

export default MoviesCarousel;
