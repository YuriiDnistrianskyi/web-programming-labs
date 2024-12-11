import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShopingItem from "../../items/ShopingItem/ShopingItem"
import { useDispatch, useSelector } from "react-redux";
import "./styleCart.css";

function Cart() {

    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();
    const items = useSelector((state) => state.shoping.items);

    const changePrice = () => {
        let price = 0;
        items.map((item) => {
            price += item.price * item.count
        });
        setTotalPrice(price);
    }

    useEffect(() => {
        changePrice();
    }, [items]);

    return(
        <>
            <p className="header-text">Shoping cart</p>
            {items ?
                items.map((item) => (
                    <ShopingItem key={item.id} id={item.id} srcImg={item.srcImg} name={item.name} price={item.price} count={item.count}/>
                ))
                : null
            }
            <div className="container__bottom">
                <NavLink to="/catalog" className="container__bottom-left">
                    <button className="shoping-page-button">Go Back</button>
                </NavLink>
                <div className="container__bottom-right">
                    <div className="display-price">{totalPrice} $</div>
                    <NavLink to="/order">
                        <button className="shoping-page-button button-continue">Continue</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Cart;
