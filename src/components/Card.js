import React from "react";
import "../stylesheets/card.css";
import food from "../images/card3.webp";

const Card = (props) => {
    return (
        <section className="carousel-card">
            <img src={props.img || food} alt="food" className="card-img" />
            <div className="card-text">
                <h2>{props.title || "Some Title"}</h2>
                <p className="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <button className="card-order">Order Now</button>
            </div>
        </section>
    );
};

export default Card;
