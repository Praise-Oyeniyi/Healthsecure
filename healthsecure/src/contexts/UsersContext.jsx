'use client'
import {
    createContext,
    useEffect,
    useState,
} from "react";


export const UserContextProvider = createContext();

const Userscontext = ({ children }) => {
    const AdminArray = []

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //       const getAdmin = localStorage.getItem("Admin");
    //       if (getAdmin) {
    //         AdminArray.push(JSON.parse(getAdmin)||'')
    //       }
    //     }
    // }, []);


    return (
        <UserContextProvider.Provider value={{ AdminArray}}>
            {children}
        </UserContextProvider.Provider>
    );
};

export default Userscontext;