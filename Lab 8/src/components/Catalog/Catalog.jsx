import React, { useState } from "react";
import { MyProvide } from "../../items/Context/Context";
import CatalogHeader from "../../items/CatalogHeader/CatalogHeader"
import CatalogList from "../../items/CatalogList/CatalogList";


function Catalog() {
    const [searchNameForList, setSearchName] = useState('')

    const searchByNameHeader = (name) => {
        setSearchName(name)
    }

    return (
        <MyProvide>
            <div>
                <CatalogHeader onSearch={searchByNameHeader}/>
                <CatalogList searchName={searchNameForList}/>
            </div>
        </MyProvide>
    );
}

export default Catalog;
