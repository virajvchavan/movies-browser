import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as Constants from './../constants.js';

function MoviesCarousel (props) {
    const {carouselImages} = props;
    if (carouselImages.length > 0) {
        return (
            <div class="columns">
                <div class="column is-one-third">is-four-fifths</div>
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
                >
                    {carouselImages.map((imagePath, index)=> {
                        return (
                            <div key={index}>
                                <img src={Constants.IMG_ENDPOINT + imagePath} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        );    
    } else return null;
}

export default MoviesCarousel;
