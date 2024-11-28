import React from "react";
import ShopingItem from "../../items/ShopingItem/ShopingItem"
import "./styleCart.css";

function Cart() {
    return(
        <>
            <p className="header-text">Shoping cart</p>
            <ShopingItem srcImg="1" name="name" price="100"/>

        </>
    );
}

export default Cart;
