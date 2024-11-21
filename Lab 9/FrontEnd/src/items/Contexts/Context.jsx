import React, {createContext, useState} from "react";
import requestItems from "../../routes/api";

export const myContext = createContext();

export const MyProvide = ({ children }) => {
    const [searchName, setSearchName] = useState('');
    const [loading, setLoading] = useState(false);

    const test = async () => {
        const allItems = await requestItems();
        console.log(allItems.data);
        return allItems.data;
    }

    const [items, setItems] = useState([]);

    const getItems = async (filters) => {
        setLoading(true);
        const a = await requestItems(filters);
        console.log(a.data[0].srcImg);
        setItems(a.data);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    return (
        <myContext.Provider value={{items, setItems, searchName, setSearchName, getItems, loading, setLoading}}>
            {children}
        </myContext.Provider>
    );
}
