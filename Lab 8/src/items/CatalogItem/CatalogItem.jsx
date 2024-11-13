import React from "react";
import { NavLink } from "react-router-dom";
import "./catalogitemStyle.css"

const a = ``

const CatalogItem = ({id, name, audience, lightingPower, srcImg="https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1"}) => {
    const url = `item/${id}`;

    return (
        <div className="catalogitem">
            <h2 className="catalogitem-header">Stadium {id}</h2>
            <img className="catalogitem-img" src={srcImg}/>
            <div className="catalogitem__content">
                <h2 className="catalogitem__content-name">{name}</h2>
                <p><span className="span__font-weight">Audience:</span> {audience} </p>
                <p><span className="span__font-weight">Lighting power:</span> {lightingPower} </p>
            </div>
            <div className="catalogitem__button">
                <button>
                    <NavLink exact to={url} className="nav-link">View more</NavLink>
                </button>
            </div>
        </div>
    );
}

export default CatalogItem;
