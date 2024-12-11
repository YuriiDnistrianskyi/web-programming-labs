import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { MyProvide } from "../../items/Contexts/Context";

import { Provider } from "react-redux";
import store from "../../items/Redux/store"
import "./appStyle.css"


function App() {
    return(
        <>
            <Provider store={store}>
                <MyProvide>
                    <Header />
                    <Navigation />
                    <Footer />
                </MyProvide>
            </Provider>
        </>
    )
}

export default App;
