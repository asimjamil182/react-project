import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductShowCase = (image) => {
    console.log(image);
    return (
        <Carousel showIndicators={false} showStatus={false} emulateTouch>
            <div>
                <img src={image!=undefined?"https://placehold.co/500":image} />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>
            <div>
                <img src="https://placehold.co/500" />
            </div>

        </Carousel>
    );
};

export default ProductShowCase;