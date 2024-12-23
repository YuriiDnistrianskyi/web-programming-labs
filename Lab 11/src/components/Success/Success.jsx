import React from "react";
import { NavLink } from "react-router-dom";
import "./styleSuccess.css";

function Success() {
    return (
        <>
            <div className="success__image">
                <svg width="200" height="200" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1215 2.93311C6.60746 2.93311 2.12146 7.41911 2.12146 12.9331C2.12146 18.4471 6.60746 22.9331 12.1215 22.9331C17.6355 22.9331 22.1215 18.4471 22.1215 12.9331C22.1215 7.41911 17.6355 2.93311 12.1215 2.93311ZM10.1225 17.3461L7.11691 14.347C6.72616 13.9571 6.72537 13.3243 7.11515 12.9334C7.50517 12.5423 8.13847 12.5416 8.52939 12.9318L10.1205 14.5201L14.7075 9.93311C15.0979 9.54264 15.731 9.54264 16.1215 9.9331C16.5119 10.3236 16.5119 10.9566 16.1215 11.3471L10.1225 17.3461Z" fill="#2FAB73"/>
                </svg>
            </div>
            <p className="success__text">
                Thank you for your choice
            </p>
            <p className="success__text">
                Wait for detailed information about your order by email
            </p>
            <div className="success__button">
                <NavLink to="/catalog" className="success__button-nl">
                    <button className="success__button-catalog">Go to catalog</button>
                </NavLink>
            </div>
        </>
    );
}

export default Success;
