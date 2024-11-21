import React from "react";
import "./selectStyle.css"

const SelectFilter = ({changeValue, title, options}) => {
    const changeSelect = (event) => {
        changeValue(event.target.value);
    }

    return(
        <>
            <div className="container">
                <select onChange={changeSelect} className="select">
                    <option>{title}</option>
                    <option>{options[0]}</option>
                    <option>{options[1]}</option>
                    <option>{options[2]}</option>
                </select>
            </div>
        </>
    );
}

export default SelectFilter;
