import React, { useContext, useState } from "react";
import "./homeStyle.css";
import { myContext } from "../../items/Contexts/Context";
import ButtonView from "../../items/ButtonView/ButtonView"
import BlockItem from "../../items/BlockItem/BlockItem";


function Home() {
    const { items } = useContext(myContext);
    const [openNewBlockItems, setOpenNewBlockItems] = useState(false);


    function changeOpenNewBlocksItems() {
        setOpenNewBlockItems(true);
    }


    return(
        <>
            <section className="container top">
                <div className="container__heading">
                    <div className="container__heading-img"></div>
                    <div className="container__heading-content">
                        <div className="container__heading-text">
                            <h1>Stadiums</h1>
                            <div>Football stadiums are more than just venues for matches; they are the epicenter of emotions and stories, where thousands of fans gather to support their teams. Each stadium has its unique character and atmosphere, from ultra-modern arenas to legendary grounds that hold memories of historic matches</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="container__form">
                    <div className="container__list">
                        {items.slice(0, 3).map(item => 
                            <BlockItem name={item.name} audience={item.audience} lightingPower={item.lightingPower} srcImg={item.srcImg}></BlockItem>
                        )}
                    </div>
                    
                    {!openNewBlockItems && <ButtonView func={changeOpenNewBlocksItems} />}

                </div>
            </section>

            {openNewBlockItems ?
                <section className="container">
                    <div className="container__form">
                        <div className="container__list">
                            {items.slice(3, 6).map(item => 
                                <BlockItem name={item.name} audience={item.audience} lightingPower={item.lightingPower} srcImg={item.srcImg}></BlockItem>
                            )}
                        </div>
                    </div>
                </section>
            : null}

        </>
    );
}

export default Home;
