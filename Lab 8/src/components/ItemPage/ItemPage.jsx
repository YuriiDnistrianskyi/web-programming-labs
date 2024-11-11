import React from "react";
import "./styleItemPage.css";

function ItemPage(item) {
    return(
        <section className="container">
            <div className="item__top">
                <div className="item__top-img">
                    <img className="item__top-img-2" />
                </div>
                <div className="item__top-content">
                    <div className="item-content">
                        <div className="content-header">
                            <div>Option 1</div>
                            <div>Option 2</div>
                        </div>
                        <h1 className="content-name">{item.name} Name</h1>
                        <div className="content-info">
                            <div className="info">Audience: {item.audience} 20000</div>
                            <div className="info">Lighting Power: {item.lightingPower} 2000 lux</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item__bottom">
                <div className="item__bottom-price">Price: {item.price} 999$</div>
                <div className="item__bottom-buttons">
                    <button className="button-item-page go-back">Go Back</button>
                    <button className="button-item-page add-to">Add to Card</button>
                </div>
            </div>
        </section>
    );
}

export default ItemPage;
