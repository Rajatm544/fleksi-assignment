import React from "react";
import foodImg from "../images/card3.webp";
import "../stylesheets/menu-card.css";

const MenuCard = (props) => {
    return (
        <section className="menu-card">
            <img className="menu-img" src={props.img} alt="menu item1" />
            <div className="info">
                <div className="basic-info">
                    <p className="dish-name">{props.dishName || "Pizza"}</p>
                    <p className="dish-price">${props.dishPrice || "10.25"}</p>
                </div>
                <p className="dish-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est, adipiscing.{" "}
                </p>
            </div>
        </section>
    );
};

export default MenuCard;
