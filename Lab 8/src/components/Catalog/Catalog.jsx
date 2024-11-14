import React, { useState } from "react";
import { MyProvide } from "../../items/Context/Context";
import CatalogHeader from "../../items/CatalogHeader/CatalogHeader"
import CatalogList from "../../items/CatalogList/CatalogList";


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
