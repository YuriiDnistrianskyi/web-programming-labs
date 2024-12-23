import React, {createContext, useState} from "react";

export const myContext = createContext();

export const MyProvide = ({ children }) => {
    const [searchName, setSearchName] = useState('');
    const [filterMinPrice, setFilterMinPrice] = useState('');
    const [filterMinAudience, setFilterMinAudience] = useState('');
    const [filterMinLightingPower, setFilterMinLightingPower] = useState('');

    const [items, setItems] = useState([
        {
            id: "1", 
            name: "Arena Lviv", 
            audience: "15000", 
            lightingPower: "2000", 
            srcImg: "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1",
            price: "100000"
        },
        {
            id: "2",
            name: "Donbas Arena",
            audience: "20000", 
            lightingPower: "2200", 
            srcImg: "https://pictures.ua.tribuna.com/image/3c61e832-6e81-466d-b540-85d56a5e31b7?width=1260&quality=70",
            price: "150000"
        },
        {
            id: "3", 
            name: "NSK 'Olimpiyskiy'", 
            audience: "25000", 
            lightingPower: "2500", 
            srcImg: "https://vechirniy.kyiv.ua/uploads/2022/08/12/483.jpg",
            price: "200000"
        },
        {
            id: "4", 
            name: "Santiago Bernabeu", 
            audience: "35000", 
            lightingPower: "3000", 
            srcImg: "https://cdn.footboom.net/img/upload/4/8cf8f--bernabeu.jpeg",
            price: "250000"
        },
        {
            id: "5", 
            name: "Camp Nou", 
            audience: "99000", 
            lightingPower: "1800", 
            srcImg: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/75/79/84.jpg",
            price: "300000"
        },
        {
            id: "6", 
            name: "Ukraina Stadium", 
            audience: "90000", 
            lightingPower: "2000", 
            srcImg: "https://upload.wikimedia.org/wikipedia/commons/3/30/Lviv_Ukraina_Stadium12.jpg",
            price: "350000"
        },
        {
            id: "7",
            name: "Soccer City", 
            audience: "94000", 
            lightingPower: "1800", 
            srcImg: "https://upload.wikimedia.org/wikipedia/commons/7/72/%D0%A1%D0%BE%D0%BA%D0%BA%D0%B5%D1%80_%D0%A1%D0%B8%D1%82%D0%B8.jpg",
            price: "400000"
        },
        {
            id: "8", 
            name: "Stadio Olimpico", 
            audience: "70000", 
            lightingPower: "1800", 
            srcImg: "https://stadium-database.com/wp-content/uploads/2024/08/stadio-olimipco-min.jpg",
            price: "450000"
        },
        {
            id: "9", 
            name: "San Siro", 
            audience: "75000", 
            lightingPower: "2000", 
            srcImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Stadio_Meazza.jpg/640px-Stadio_Meazza.jpg",
            price: "500000"
        }
    ]);

    return (
        <myContext.Provider value={{items, setItems, searchName, setSearchName, filterMinPrice, setFilterMinPrice, filterMinAudience, setFilterMinAudience, filterMinLightingPower, setFilterMinLightingPower}}>
            {children}
        </myContext.Provider>
    );
}
