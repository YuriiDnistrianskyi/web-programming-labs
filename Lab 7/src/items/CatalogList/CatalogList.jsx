import React from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./cataloglistStyle.css"

function CatalogList({list}) {
    return (
        <div className="container__list">
            {list.map(item => (
                <CatalogItem 
                    name={item.name}
                    audience={item.audience}
                    lightingPower={item.lightingPower}
                    srcImg={item.srcImg}
                ></CatalogItem>
            ))}
        </div>
    )
}

export default CatalogList;
