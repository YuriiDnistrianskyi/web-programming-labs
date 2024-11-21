import React from "react";
import { NavLink } from "react-router-dom";
import "./catalogitemStyle.css"


const CatalogItem = ({id, name, audience, lightingPower, srcImg, price, searchName}) => {
    const url = `item/${id}`

    if (searchName != '') {
        if (!name.includes(searchName)) {
            return null;
        }
    }

    return (
        <div className="catalogitem">
            <h2 className="catalogitem-header">Stadium {id}</h2>
            <img className="catalogitem-img" src={srcImg}/>
            <div className="catalogitem__content">
                <h2 className="catalogitem__content-name">{name}</h2>
                <p className="catalogitem-info"><span className="span__font-weight">Audience:</span> {audience} </p>
                <p className="catalogitem-info"><span className="span__font-weight">Lighting power:</span> {lightingPower} lux</p>
                <p className="catalogitem-info"><span className="span__font-weight">Price:</span> {price} $</p>
            </div>
            <div className="catalogitem__button">
                <button>
                    <NavLink to={url} className="nav-link">View more</NavLink>
                </button>
            </div>
        </div>
    );
}

export default CatalogItem;
