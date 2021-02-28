import React from "react";
import MenuCard from "./MenuCard";
import dots from "../images/dots.png";
import "../stylesheets/explore.css";

import foodImg1 from "../images/card1.webp";
import foodImg2 from "../images/card2.webp";
import foodImg3 from "../images/card3.webp";
import foodImg4 from "../images/card4.webp";
import foodImg5 from "../images/card5.webp";

const ExploreMenu = () => {
    return (
        <section className="explore">
            <div className="dots-bg">
                <img className="dots" src={dots} alt="dots" />
            </div>
            <header className="explore-heading">
                <h2 className="heading">Explore Our Menu</h2>
                <div className="green-block"></div>
                <p className="explore-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est, adipiscing cursus auctor eget sed phasellus senectus.
                    {window.innerWidth >= 600 ? (
                        <span>
                            Ut tellus donec vestibulum tristique leo bibendum in
                            a, tincidunt. Volutpat metus id amet.
                        </span>
                    ) : (
                        ""
                    )}
                </p>
            </header>
            <div className="dishes">
                <div className="col">
                    <MenuCard
                        img={foodImg1}
                        dishPrice={"10.25"}
                        dishName={"Pancake"}
                    />
                    <MenuCard
                        img={foodImg2}
                        dishPrice={"8.75"}
                        dishName={"Burger"}
                    />
                    <MenuCard
                        img={foodImg3}
                        dishPrice={"15.00"}
                        dishName={"Naan & Curry"}
                    />
                </div>
                <div className="col">
                    <MenuCard
                        img={foodImg4}
                        dishPrice={"23.25"}
                        dishName={"Steak"}
                    />
                    <MenuCard
                        img={foodImg5}
                        dishPrice={"25.00"}
                        dishName={"Pizza"}
                    />
                    <MenuCard
                        img={foodImg1}
                        dishPrice={"10.50"}
                        dishName={"Pancake"}
                    />
                </div>
            </div>
        </section>
    );
};

export default ExploreMenu;
