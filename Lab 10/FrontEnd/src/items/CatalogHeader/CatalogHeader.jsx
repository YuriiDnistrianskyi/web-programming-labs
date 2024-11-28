import React from "react";
import { useContext } from "react";
import { myContext } from "../Contexts/Context"; 
import "./styleCatalogHeader.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";


function CatalogHeader() {
    const minPriceList = [200000, 300000, 400000];
    const minAudienceList = [20000, 40000, 90000];
    const minLightingPowerList = [1500, 2000, 2500, 3000];

    const { getItems, setSearchName } = useContext(myContext);

    let searchName = '';
    let minPriceValue = '';
    let minAudienceValue = '';
    let minLightingPowerValue = '';

    const changeSearchName = (event) => {
        searchName = event.target.value;
    }

    const changeFilterMinAudience = (value) => {
        value == "Min audience" ? minAudienceValue = "" : minAudienceValue = value;
    }

    const changeFilterMinLightingPower = (value) => {
        value == "Min lighting power" ? minLightingPowerValue = "" : minLightingPowerValue = value;
    }

    const changeFilterMinPrice = (value) => {
        value == "Min price" ? minPriceValue = "" : minPriceValue = value;
    }

    const filterItems = () => {
        setSearchName(searchName);
        getItems({'price': minPriceValue,
                  'audience': minAudienceValue,
                  'lightingPower': minLightingPowerValue
        });
    }

    return (
        <div className="container__catalog">
            <div className="container__top">
                <div className="container__top-selects">
                    <SelectFilter changeValue={changeFilterMinAudience} title="Min audience" options={minAudienceList} />
                    <SelectFilter changeValue={changeFilterMinLightingPower} title="Min lighting power" options={minLightingPowerList} />
                    <SelectFilter changeValue={changeFilterMinPrice} title="Min price" options={minPriceList} />
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
