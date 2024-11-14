import React from "react";
import "./footerStyle.css"

function Footer() {
    return(
        <footer className="container__footer">
            <div className="container__footer-top">
                <div className="footer__top-text">
                    <h3 className="footer__text-head">The best stadiums in the world</h3>
                    <div className="footer__text-inner">stadiums stadiums stadiums stadiums stadiums stadiums stadiums stadiums</div>
                </div>
                <div className="footer__top-logo"></div>
                <div className="footer__top-links">
                    <ul className="list-links">
                        <li><a>F</a></li>
                        <li><a>I</a></li>
                        <li><a>T</a></li>
                        <li><a>G</a></li>
                    </ul>
                </div>
            </div>
            <div className="container__footer-line"></div>
            <div className="container__footer-bottom">2024 LP NU</div>
        </footer>
    )
}

export default Footer;
