import React, { useState } from "react";
import "./styleShopingItem.css"

const ShopingItem = (srcImg, name, price) => {

    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount((newCount) => newCount + 1);
    }

    const divCount = () => {
        setCount((newCount) => Math.max(1, newCount - 1));
    }

    
    const Test = (event) => {
        alert(typeof parseInt(event.target.value));
        if (event.target.value < 1) {
            return;
        }
        setCount(Number(event.target.value));
    }


    return (
        <>
            <div className="shoping__container">
                <img className="shoping__container-image"/>
                <div className="shoping__container-name">
                    <h2 className="shoping-item-name">Name</h2>
                </div>
                <div className="shoping__container-menu">
                    <button className="shoping-item-button" onClick={addCount}>+</button>
                    <input className="shoping-item-count" type="number" value={count} onChange={Test}/>
                    <button className="shoping-item-button" onClick={divCount}>-</button>
                </div>
                <div className="shoping__container-price">
                    <p className="shoping-item-price">price</p>
                </div>
            </div>
        </>
    );
}

export default ShopingItem;
