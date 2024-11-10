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
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemPage;
