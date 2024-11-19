import React from "react";
import { MyProvide } from "../../items/Contexts/Context";
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
