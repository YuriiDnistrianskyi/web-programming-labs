import React from "react";
import { MyProvide } from "../../items/Context/Context";
import CatalogHeader from "../../items/CatalogHeader/CatalogHeader"
import CatalogList from "../../items/CatalogList/CatalogList";

import SelectFilter from "../../items/SelectFilter/SelectFilter";


function Catalog() {
    return (
        <MyProvide>
            <div>
                <CatalogHeader />
                <CatalogList />
            </div>
        </MyProvide>
    );
}

export default Catalog;
