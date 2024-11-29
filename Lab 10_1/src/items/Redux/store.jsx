import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"

const store = configureStore({
    reducer: {
        shoping: rootReducer
    }
});

export default store;
