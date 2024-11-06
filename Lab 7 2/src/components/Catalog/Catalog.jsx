import React from "react";
import "./catalogStyle.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";
import CatalogList from "../../items/CatalogList/CatalogList";
import CatalogItem from "../../items/CatalogItem/CatalogItem";
//import items from ""

let items = [
    {name: "Arena Lviv", audience: "15000", lightingPower: "2000", srcImg: "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1"},
    {name: "Donbas Arena", audience: "20000", lightingPower: "2200", srcImg: "https://pictures.ua.tribuna.com/image/3c61e832-6e81-466d-b540-85d56a5e31b7?width=1260&quality=70"},
    {name: "NSK 'Olimpiyskiy'", audience: "25000", lightingPower: "2500", srcImg: "https://vechirniy.kyiv.ua/uploads/2022/08/12/483.jpg"}
];

function Catalog() {
    return (
        <>
            <section className="container">
                <div className="container__top">
                    <div className="container__top-selects">
                        <SelectFilter title="filter 1" options="1234" />
                        <SelectFilter title="filter 2" options="1234" />
                        <SelectFilter title="filter 3" options="1234" />
                    </div>
                    <input className="container__top-search" placeholder="Search" />
                </div>
                <div>
                    <CatalogList list={items}></CatalogList>
                </div>

            </section>
        </>
    );
}

export default Catalog;
