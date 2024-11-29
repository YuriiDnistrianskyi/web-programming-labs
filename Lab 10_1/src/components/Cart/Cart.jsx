import React from "react";
import ShopingItem from "../../items/ShopingItem/ShopingItem"
import { useSelector } from "react-redux";
import "./styleCart.css";

function Cart() {

    const items = useSelector((state) => state.shoping.items);

    return(
        <>
            <p className="header-text">Shoping cart</p>
            {items ?
                items.map((item) => (
                    <ShopingItem id={item.id} srcImg={item.srcImg} name={item.name} price={item.price} count={item.count}/>
                ))
                : null
            }
        </>
    );
}

export default Cart;
