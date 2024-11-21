import React, {createContext, useState} from "react";
import requestItems from "../../routes/api";

export const myContext = createContext();

export const MyProvide = ({ children }) => {
    const [searchName, setSearchName] = useState('');

    const [items, setItems] = useState([]);

    const getItems = async (filters) => {
        const a = await requestItems(filters);
        console.log(a.data);
        setItems(a.data);
    }

    return (
        <myContext.Provider value={{items, setItems, searchName, setSearchName, getItems}}>
            {children}
        </myContext.Provider>
    );
}
