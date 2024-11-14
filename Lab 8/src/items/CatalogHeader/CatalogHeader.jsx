import React, { useState } from "react"; //
import "./styleCatalogHeader.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";

function CatalogHeader({ onSearch }) {
    const [searchName, setSearchName] = useState('');

    const changeSearchName = (event) => {
        setSearchName(event.target.value)
    }

    const searchByName = () => {
        onSearch(searchName);
    }

    return (
        <div className="container__catalog">
            <div className="container__top">
                <div className="container__top-selects">
                    <SelectFilter title="filter 1" options="1234" />
                    <SelectFilter title="filter 2" options="1234" />
                    <SelectFilter title="filter 3" options="1234" />
                </div>
                <div className="container__top-items">
                    <input className="item-search" onChange={changeSearchName} placeholder="Search" />
                    <button value={searchName} className="item-apply" onClick={searchByName}>Apply</button>
                </div>
            </div>
        </div>
    );
}

export default CatalogHeader;
