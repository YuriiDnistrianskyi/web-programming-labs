import React, { useContext, useEffect } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./cataloglistStyle.css";
import { myContext } from "../Contexts/Context";

const CatalogList = () => {
    const { items, searchName, loading, setLoading } = useContext(myContext)

    return (
        <div>
            {loading ? 
                <div className="loading-container">
                    <div className="loader">
                        Loading...
                    </div>
                </div>
                : 
                <div className="catalog__container-list">
                    {items.map(item => (
                        <CatalogItem key={item.id}
                            id={item.id}
                            name={item.name}
                            audience={item.audience}
                            lightingPower={item.lightingPower}
                            //srcImg={item.srcImg}
                            price={item.price}
                            searchName = {searchName}
                        ></CatalogItem>
                    ))}
                </div>
            }
        </div>
    );
}

export default CatalogList;
