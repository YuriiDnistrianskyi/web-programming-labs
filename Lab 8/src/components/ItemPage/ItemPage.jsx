import React from "react";
import "./styleItemPage.css";

function ItemPage(item) {
    return(
        <section className="container">
            <div className="item__top">
                <div className="item__top-img">
                    <image src={item.srcImg} />
                </div>
                <div className="item__top-content">
                    <div className="item-content">
                        <div className="content-header">
                            <div>Option 1</div>
                            <div>Option 2</div>
                        </div>
                        <h1>{item.name} Name</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemPage;
