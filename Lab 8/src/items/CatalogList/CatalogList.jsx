import React, { useContext } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./cataloglistStyle.css";
import { myContext } from "../Context/Context";

function CatalogList({ searchName }) {
    const { items } = useContext(myContext)

    return (
        <div className="container__list">
            {items.map(item => (
                <CatalogItem 
                    searchNameForItem={searchName}
                    id={item.id}
                    name={item.name}
                    audience={item.audience}
                    lightingPower={item.lightingPower}
                    srcImg={item.srcImg}
                ></CatalogItem>
            ))}
        </div>
    );
}

export default CatalogList;
