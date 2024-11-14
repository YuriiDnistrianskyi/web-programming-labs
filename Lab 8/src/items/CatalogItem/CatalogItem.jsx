import React from "react";
import { NavLink } from "react-router-dom";
import "./catalogitemStyle.css"


const CatalogItem = ({searchNameForItem, id, name, audience, lightingPower, srcImg}) => {
    const url = `item/${id}`

    if (searchNameForItem != '') {
        if (!name.includes(searchNameForItem)) {
            return null;
        }
    }

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
