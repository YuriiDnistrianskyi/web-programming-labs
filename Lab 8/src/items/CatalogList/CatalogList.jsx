import React, { useContext } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./cataloglistStyle.css";
import { myContext } from "../Context/Context";

function CatalogList() {
    const { items, searchName, filterMinPrice, filterMinAudience, filterMinLightingPower } = useContext(myContext)

    return (
        <div className="container__list">
            {items.map(item => (
                <CatalogItem key={item.id}
                    id={item.id}
                    name={item.name}
                    audience={item.audience}
                    lightingPower={item.lightingPower}
                    srcImg={item.srcImg}
                    price={item.price}
                    searchName = {searchName}
                    filterMinPrice={filterMinPrice}
                    filterMinAudience={filterMinAudience}
                    filterMinLightingPower={filterMinLightingPower}
                ></CatalogItem>
            ))}
        </div>
    );
}

export default CatalogList;
