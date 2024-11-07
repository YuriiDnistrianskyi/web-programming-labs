import React from "react";
import "./catalogStyle.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";
import CatalogList from "../../items/CatalogList/CatalogList";
//import items from ""

let items = [
    {id: "1", name: "Arena Lviv", audience: "15000", lightingPower: "2000", srcImg: "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1"},
    {id: "2", name: "Donbas Arena", audience: "20000", lightingPower: "2200", srcImg: "https://pictures.ua.tribuna.com/image/3c61e832-6e81-466d-b540-85d56a5e31b7?width=1260&quality=70"},
    {id: "3", name: "NSK 'Olimpiyskiy'", audience: "25000", lightingPower: "2500", srcImg: "https://vechirniy.kyiv.ua/uploads/2022/08/12/483.jpg"},
    {id: "4", name: "Santiago Bernabeu", audience: "35000", lightingPower: "3000", srcImg: "https://cdn.footboom.net/img/upload/4/8cf8f--bernabeu.jpeg"},
    {id: "5", name: "Camp Nou", audience: "99000", lightingPower: "1800", srcImg: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/75/79/84.jpg"},
    {id: "6", name: "Ukraina Stadium", audience: "90000", lightingPower: "2000", srcImg: "https://upload.wikimedia.org/wikipedia/commons/3/30/Lviv_Ukraina_Stadium12.jpg"},
    {id: "7", name: "Soccer City", audience: "94000", lightingPower: "1800", srcImg: "https://upload.wikimedia.org/wikipedia/commons/7/72/%D0%A1%D0%BE%D0%BA%D0%BA%D0%B5%D1%80_%D0%A1%D0%B8%D1%82%D0%B8.jpg"},
    {id: "8", name: "Stadio Olimpico", audience: "70000", lightingPower: "1800", srcImg: "https://stadium-database.com/wp-content/uploads/2024/08/stadio-olimipco-min.jpg"},
    {id: "9", name: "San Siro", audience: "75000", lightingPower: "2000", srcImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Stadio_Meazza.jpg/640px-Stadio_Meazza.jpg"}
];

function Catalog() {
    return (
        <>
            <section className="container__catalog">
                <div className="container__top">
                    <div className="container__top-selects">
                        <SelectFilter title="filter 1" options="1234" />
                        <SelectFilter title="filter 2" options="1234" />
                        <SelectFilter title="filter 3" options="1234" />
                    </div>
                    <input className="container__top-search" placeholder="Search" />
                </div>
            </section>

            <section className="container__main">
                <CatalogList list={items}></CatalogList>
            </section>
        </>
    );
}

export default Catalog;
