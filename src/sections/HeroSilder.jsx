import React from "react";
import { ArrowRight, Circle, CircleFill } from "react-bootstrap-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bgm1 from "../images/bg1 - Copy.jpg";
import bgm2 from "../images/bg2 - Copy.jpg";
import bgm3 from "../images/bg3 - Copy.jpg";

const HeroSilder = () => {
    const items = [
        {
            desktop_img: bg1,
            mobile_img: bgm1,
            button_url: "#"
        },
        {
            desktop_img: bg2,
            mobile_img: bgm2,
            button_url: "#"
        },
        {
            desktop_img: bg3,
            mobile_img: bgm3,
            button_url: "#"
        }
    ]

    const renderDotsItem = (onClickHandler, isSelected, index, label) => {
        return isSelected ? <CircleFill className="inline-block p-1 fill-color2" onClick={onClickHandler} size={17} /> : <Circle className="inline-block p-1 fill-color2" onClick={onClickHandler} size={17} />
    };
    return (
        <div className="hero-silder w-full">
            <Carousel swipeable={true} showThumbs={false} emulateTouch showStatus={false} renderIndicator={renderDotsItem}>
                {items.map((item) =>
                    <div className=" relative">
                        <img src={item.desktop_img} className="!hidden md:!block" />
                        <img src={item.mobile_img} className=" md:!hidden" />
                        <a href={item.button_url} className=" uppercase bg-color2 text-secondary px-6 py-2 rounded-full font-semibold absolute left-16 bottom-16">Shop <ArrowRight className=" inline-block mb-1"/></a>
                    </div>
                )}
            </Carousel>
        </div>
    )
}

export default HeroSilder;