'use client'
import {
    createContext,
    useState,
} from "react";


export const SideContextProvider = createContext();

const SideBarcontext = ({ children }) => {
    const [data, setData] = useState(0)

    return (
        <SideContextProvider.Provider value={{ data, setData}}>
            {children}
        </SideContextProvider.Provider>
    );
};

export default SideBarcontext;