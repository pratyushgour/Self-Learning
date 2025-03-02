import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ID } from "appwrite";
import { account } from "../lib/appwrite";

const UserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

export function UserProvider(props){
    const [user, setUser] = useState(null);

    async function login(email, password){
        const loggedIn = await account.createEmailPasswordSession(email, password);
        setUser(loggedIn);
        window.location.replace("/")
    }

    async function logout(){
        await account.deleteSession("current");
        setUser(null);
    }

    async function register(email, password){
        await account.create(ID.unique(), email, password);
        await login(email, password);
    }

    async function init(){
        try {
            const loggedIn = await account.get();
            setUser(loggedIn);
        } catch (err) {
            setUser(null);
        }
    }

    useEffect(() => {
        init();
    },[]);


    return(
        <UserContext.Provider value={{current: user, login, logout, register}}>
            {props.children}
        </UserContext.Provider>
    )
} 