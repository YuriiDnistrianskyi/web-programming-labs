import React from "react";
import "./styleCatalogHeader.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";

function CatalogHeader() {
    return (
        <div className="container__catalog">
            <div className="container__top">
                <div className="container__top-selects">
                    <SelectFilter title="filter 1" options="1234" />
                    <SelectFilter title="filter 2" options="1234" />
                    <SelectFilter title="filter 3" options="1234" />
                </div>
                <div className="container__top-items">
                    <input className="item-search" placeholder="Search" />
                    <button className="item-apply">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default CatalogHeader;
