import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import lettuce from "../images/lettuce.png";
import dots from "../images/dots.png";

import "../stylesheets/prebook.css";

const PreBook = () => {
    const [formFields, setFormFields] = useState({
        user: "",
        guests: 3,
        date: new Date(),
        time: new Date(),
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="prebook">
            <img src={lettuce} alt="lettuce" className="lettuce-img" />
            <div className="dots-bg">
                <img className="dots" src={dots} alt="dots" />
            </div>
            <div className="main-section">
                <div className="header">
                    <div className="green-bar"></div>
                    <h2 className="heading">Advance Booking</h2>
                </div>

                <form className="prebook-form" onSubmit={handleSubmit}>
                    <div className="form-content">
                        <div className="col">
                            <label>
                                Name:{" "}
                                <input
                                    name="user"
                                    type="text"
                                    value={formFields.user}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </label>
                            <label>
                                Email:{" "}
                                <input
                                    name="email"
                                    type="email"
                                    value={formFields.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@gmail.com"
                                    required
                                />
                            </label>
                            <label>
                                Phone:{" "}
                                <input
                                    name="phone"
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="+49 123456789"
                                    value={formFields.phone}
                                    required
                                />
                            </label>
                        </div>

                        <div className="col">
                            <label>
                                Guests:{" "}
                                <input
                                    name="guests"
                                    value={formFields.guests}
                                    onChange={handleChange}
                                    type="number"
                                    min="1"
                                    max="20"
                                    className="input-number"
                                    required
                                />
                            </label>
                            <label>
                                Date:{" "}
                                <DatePicker
                                    onChange={(date) =>
                                        setFormFields({ ...formFields, date })
                                    }
                                    value={formFields.date}
                                />
                            </label>
                            {window.innerWidth <= 600 ? (
                                <div style={{ margin: "0.8em 0" }}></div>
                            ) : (
                                ""
                            )}
                            <label>
                                Time:{" "}
                                <TimePicker
                                    onChange={(time) =>
                                        setFormFields({ ...formFields, time })
                                    }
                                    value={formFields.time}
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="booking-submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default PreBook;
