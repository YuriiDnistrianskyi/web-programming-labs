import React from "react";
import { NavLink } from "react-router-dom";
import "./buttonviewStyle.css";

const ButtonView = ({ func }) => {
    return (
        <>
            <div className="container__button">
                <button onClick={func}>View more</button>
            </div>
        </>
    );
};

export default ButtonView;
