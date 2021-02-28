import React from "react";
import "../stylesheets/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <i class="lni lni-twitter-original"></i>
                <i class="lni lni-facebook-original"></i>
                <i class="lni lni-instagram-original"></i>
                <i class="lni lni-behance-original"></i>
            </div>
            <p className="copyright">&#169; 2021 expice Ltd</p>
        </footer>
    );
};

export default Footer;
