import React, { useState } from "react";
import "../stylesheets/landing.css";
import landingImg from "../images/food-top.png";
import dots from "../images/dots.png";

const Landing = () => {
    const [state, setState] = useState({
        logo: "expice",
        name: "Restaurant Nidda",
    });

    return (
        <main className="landing">
            <nav className="navbar">
                <strong className="nav-brand">{state.logo}</strong>
                <div className="hamburger-icon">
                    <div className="stick1"></div>
                    <div className="stick1"></div>
                    <div className="stick2"></div>
                </div>
            </nav>
            <section className="background">
                <div className="left-section">
                    <p className="food-text">Food</p>
                    <p className="restaurant-name">{state.name}</p>
                    <button className="order-btn">Order Now</button>
                </div>
                <div className="right-section">
                    <i className="lni lni-arrow-left-circle"></i>
                    <i className="lni lni-arrow-right-circle"></i>
                </div>
                <div className="dots-bg">
                    <img className="dots" src={dots} alt="dots" />
                </div>

                <img
                    className="landing-food-img"
                    src={landingImg}
                    alt="food top view"
                />
            </section>
        </main>
    );
};

export default Landing;
