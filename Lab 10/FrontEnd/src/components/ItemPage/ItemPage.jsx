import React, { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { myContext } from "../../items/Contexts/Context";
import "./styleItemPage.css";
import SelectFilter from "../../items/SelectFilter/SelectFilter";

const _options = [1, 2, 3, 4, 5, 6, 7];

function ItemPage() {
    const { id } = useParams();
    const { items } = useContext(myContext);
    alert(items)
    console.log(items);

    const item = items.find(i => i.id === id);
    console.log(item);

    return(
        <section className="container">
            <div className="item__top">
                <div className="item__top-img">
                    <img className="item__top-img-2" src={item.srcImg}/>
                </div>
                <div className="item__top-content">
                    <div className="item-content">
                        <div className="content-header">
                            <div>Option 1</div>
                            <div>Option 2</div>
                        </div>
                        <h1 className="content-name">{item.name}</h1>
                        <div className="content-info">
                            <div className="info">Audience: {item.audience}</div>
                            <div className="info">Lighting Power: {item.lightingPower} lux</div>
                        </div>
                        <div className="content-filters"> 
                            <SelectFilter title="Select" options={_options}/>
                            <SelectFilter title="Test" options={_options}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item__bottom">
                <div className="item__bottom-price">Price: {item.price} $</div>
                <div className="item__bottom-buttons">
                    <NavLink exact to="/catalog" className="item__navlink">
                        <button className="button-item-page go-back">Go Back</button>
                    </NavLink>
                    <button className="button-item-page add-to">Add to Card</button>
                </div>
            </div>
        </section>
    );
}

export default ItemPage;
