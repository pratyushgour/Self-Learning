import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { databases } from "../lib/appwrite";
import { useEffect } from "react";
import {ID, Query} from "appwrite";

export const IDEAS_DATABASE_ID = "ideas-tracker";
export const IDEAS_COLLECTION_ID = "ideas-tracker"; 

const createIdeas = createContext();

export const useIdeas  = () => {
    return useContext(createIdeas);
}

export const IdeasProvider = (props) => { 
    const [ideas, setIdeas] = useState([]);

    async function add(idea){
        try {
            const response = await databases.createDocument(
                IDEAS_DATABASE_ID,
                IDEAS_COLLECTION_ID,
                ID.unique(),
                idea
            );
            setIdeas((ideas) => [response, ...ideas].slice(0, 10));
        } catch (err) {
            console.log(err);
        }
    }

    async function remove(id){
        try {
            await databases.deleteDocument(
                IDEAS_DATABASE_ID,
                IDEAS_COLLECTION_ID,
                id
            )
            setIdeas(() => ideas.filter((idea)=> idea.$id !== id));
            await init();
        } catch (error) {
            console.log(error)
        }
    }

    async function init(){
        try {
            const response = await databases.listDocuments(
                IDEAS_DATABASE_ID,
                IDEAS_COLLECTION_ID,
                [Query.orderDesc("$createdAt"), Query.limit(10)]
            );
            setIdeas(response.documents);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        init();
    }, []);

    return(
        <createIdeas.Provider value={{ current: ideas, add, remove}}>
        {props.children}
        </createIdeas.Provider>
    )
}