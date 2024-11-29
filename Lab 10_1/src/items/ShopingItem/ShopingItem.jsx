import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styleShopingItem.css"

const ShopingItem = ({id, srcImg, name, price, count}) => {

    const dispatch = useDispatch();

    const addCount = () => {
        dispatch({type: "ADD_COUNT", idItem: id});
    }

    const divCount = () => {
        count = Math.max(1, count - 1);
    }


    return (
        <>
            <div className="shoping__container">
                <img className="shoping__container-image" src={srcImg} />
                <div className="shoping__container-name">
                    <h2 className="shoping-item-name">{name}</h2>
                </div>
                <div className="shoping__container-menu">
                    <button className="shoping-item-button" onClick={addCount}>+</button>
                    <div className="shoping-item-count">{count}</div>
                    <button className="shoping-item-button" onClick={divCount}>-</button>
                </div>
                <div className="shoping__container-price">
                    <p className="shoping-item-price">{price} $</p>
                </div>
            </div>
        </>
    );
}

export default ShopingItem;
