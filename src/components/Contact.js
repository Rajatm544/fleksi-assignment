import React from "react";
import lettuce from "../images/lettuce.png";
import dots from "../images/dots.png";

import "../stylesheets/contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <img src={lettuce} className="lettuce-img" alt="decorative" />
            <div className="header">
                <div className="dots-bg">
                    <img className="dots" src={dots} alt="dots" />
                </div>
                <h2 className="contact-heading">Reach Out To Us!</h2>
                <p className="subtitle">
                    In case you want to share your experience about our service,
                    or if you have an enquiry.
                </p>
            </div>
            <form className="contact-form">
                <label className="contact-label">
                    Your Email: <br />
                    <input
                        type="email"
                        name="email"
                        className="contact-input"
                        placeholder="johndoe@gmail.com"
                    />
                </label>
                <label className="contact-label">
                    Your Name: <br />
                    <input
                        className="contact-input"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                    />
                </label>
                <label className="contact-label">
                    Your Message: <br />
                    <textarea
                        className="contact-message"
                        placeholder="I wanted to share that..."
                    />
                </label>
                <button type="submit" className="contact-submit">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
