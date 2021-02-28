import React from "react";
import Card from "./Card.js";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import dots from "../images/dots.png";
import "../stylesheets/about.css";

import foodImg1 from "../images/card1.webp";
import foodImg2 from "../images/card2.webp";
import foodImg3 from "../images/card3.webp";
import foodImg4 from "../images/card4.webp";
import foodImg5 from "../images/card5.webp";

const About = () => {
    return (
        <section className="about">
            <header className="about-header">
                <div className="left-side">
                    <div className="green-block"></div>
                    <h1 className="about-heading">
                        Some Of Our Top Dishes For Dining In Or Take Away!
                    </h1>
                </div>

                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
            </header>
            <div className="about-carousel">
                <div className="dots-bg">
                    <img className="dots" src={dots} alt="dots" />
                </div>
                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={100}
                    totalSlides={5}
                    visibleSlides={window.innerWidth <= 600 ? 1 : 2}
                    step={1}
                    dragStep={1}
                    interval={8000}
                    isPlaying={true}
                    infinite={true}>
                    {window.innerWidth >= 600 ? (
                        <ButtonNext>
                            <i className="lni lni-arrow-right-circle"></i>
                        </ButtonNext>
                    ) : (
                        ""
                    )}

                    <Slider>
                        <Slide index={0}>
                            <Card img={foodImg1} title={"Pancakes"} />
                        </Slide>
                        <Slide index={1}>
                            <Card img={foodImg2} title={"Burger"} />
                        </Slide>
                        <Slide index={2}>
                            <Card img={foodImg3} title={"Curries"} />
                        </Slide>
                        <Slide index={3}>
                            <Card img={foodImg4} title={"Steak"} />
                        </Slide>
                        <Slide index={4}>
                            <Card img={foodImg5} title={"Pizza"} />
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </section>
    );
};
export default About;
