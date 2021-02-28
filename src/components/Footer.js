import React from "react";
import "../stylesheets/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <i className="lni lni-twitter-original"></i>
                <i className="lni lni-facebook-original"></i>
                <i className="lni lni-instagram-original"></i>
                <i className="lni lni-behance-original"></i>
            </div>
            <p className="copyright">&#169; 2021 expice Ltd</p>
        </footer>
    );
};

export default Footer;
