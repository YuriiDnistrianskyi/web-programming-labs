import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { MyProvide } from "../../items/Contexts/Context";
import "./appStyle.css"


function App() {
    return(
        <>
            <MyProvide>
                <Header />
                <Navigation />
                <Footer />
            </MyProvide>
        </>
    )
}

export default App;
