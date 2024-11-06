import React from "react";
import "./selectStyle.css"

const SelectFilter = ({title, options}) => {
    return(
        <>
            <div className="container">
                <select className="select">
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
