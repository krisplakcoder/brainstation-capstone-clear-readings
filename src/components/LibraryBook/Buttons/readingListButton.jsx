import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:8080";

export default function ReadListButton({id, isbn}) {
    const [readButtonName, setReadButton] = useState();
    const [newReadStyle, setNewReadStyle] = useState();

    useEffect(() => {
        const getReadList = async () => {
            try {
                const response = await axios.get(URL + "/readinglist");
                IDchecker(response.data);
                console.log(response.data);
            } catch(error) {console.error(error)}
        }; getReadList();
    }, []);

    function IDchecker(array) {
        
        if (array.find((obj) => obj.book_id === id) !== undefined) {

            setReadButton("Remove from Reading List");
            setNewReadStyle("library__buttons-reading-list--active");
        } else {
            setReadButton("Add to Reading List");
            setNewReadStyle();
        }
    }

    async function addReadingList(id) {

        if (readButtonName === "Add to Reading List") {
            setNewReadStyle("library__buttons-reading-list--active");
            setReadButton("Remove from Reading List");
            try {
                await axios.post(URL+"/readinglist", {id, isbn}).then(response => {console.log(response.data)});
            } catch(error) {console.error(error)};
        } else if (readButtonName === "Remove from Reading List") {
            setReadButton("Add to Reading List");
            setNewReadStyle();
            try {
                await axios.delete(URL+"/readinglist/"+id);
            } catch(error) {console.error(error)};
        }
    }

    return (
        <>
            <button className={`library__buttons library__buttons-reading-list ${newReadStyle}`} onClick={() => addReadingList(id)}>{readButtonName}</button>
        </>
    )
}