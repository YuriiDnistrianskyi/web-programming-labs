import React from "react";
import { useContext } from "react";
import { myContext } from "../Context/Context"; 
import "./styleCatalogHeader.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";


function CatalogHeader() {
    const minPriceList = [200000, 300000, 400000];
    const minAudienceList = [20000, 40000, 90000];
    const minLightingPowerList = [1500, 2000, 2500, 3000];

    const { setSearchName, setFilterMinPrice, setFilterMinAudience, setFilterMinLightingPower } = useContext(myContext);

    let searchName = '';
    let minPriceValue = '';
    let minAudienceValue = '';
    let minLightingPowerValue = '';

    const changeSearchName = (event) => {
        searchName = event.target.value;
    }

    const changeFilterMinPrice = (value) => {
        minPriceValue = value;
    }

    const changeFilterMinAudience = (value) => {
        minAudienceValue = value
    }

    const changeFilterMinLightingPower = (value) => {
        minLightingPowerValue = value
    }

    const filterItems = () => {
        setSearchName(searchName);
        setFilterMinPrice(minPriceValue);
        setFilterMinAudience(minAudienceValue);
        setFilterMinLightingPower(minLightingPowerValue);
    }

    return (
        <div className="container__catalog">
            <div className="container__top">
                <div className="container__top-selects">
                    <SelectFilter changeValue={changeFilterMinPrice} title="Min price" options={minPriceList} />
                    <SelectFilter changeValue={changeFilterMinAudience} title="Min audience" options={minAudienceList} />
                    <SelectFilter changeValue={changeFilterMinLightingPower} title="Min lighting power" options={minLightingPowerList} />
                </div>
                <div className="container__top-items">
                    <input className="item-search" onChange={changeSearchName} placeholder="Search" />
                    <button value={searchName} className="item-apply" onClick={filterItems}>Apply</button>
                </div>
            </div>
        </div>
    );
}

export default CatalogHeader;
