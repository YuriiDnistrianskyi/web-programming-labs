import React from "react";
import { NavLink } from "react-router-dom";
import "./buttonviewStyle.css";

const ButtonView = () => {
    return (
        <>
            <NavLink to="/catalog">
                <div className="container__button">
                    <button>View more</button>
                </div>
            </NavLink>
        </>
    );
};

export default ButtonView;
