import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import ItemPage from "../ItemPage/ItemPage";
import "./navigationStyle.css"

const item1 = {id: "1", name: "Arena Lviv", audience: "15000", lightingPower: "2000", srcImg: "https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1"};

function Navigation(){
    return (
        <Router>
            <div className="container__navigation">
                <div className="container__navigation-logo"></div>
                <ul className="container__navigation-nav-menu">
                    <li>
                        <NavLink exact to="/" activeClassName="active" className="static">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/catalog" activeClassName="active" className="static">Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/card" activeClassName="active" className="static">Cards</NavLink>
                    </li>
                </ul>
                <div className="container__navigation-end"></div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/card" element={<Cart />} />
                <Route path="/catalog/item/:id" element={<ItemPage item={item1}></ItemPage>} />
            </Routes>
        </Router>
    );
}

export default Navigation;
