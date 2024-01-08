import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:8080";

export default function FavButton({id}) {
    const [favButtonName, setFavoriteButton ] = useState();
    const [newStyle, setNewStyle] = useState();
    
    useEffect(() => {
        const getFavorites = async () => {
            try {
                const response = await axios.get(URL+"/favorites");
                IDchecker(response.data);
            } catch(error) {console.error(error)}
        }; getFavorites();     
    }, []);    
    

    function IDchecker(array){
        if (array.find((obj) => obj.book_id === id) !== undefined) {

            setFavoriteButton("Remove From Favorites");
            setNewStyle("library__buttons-favorite--active");
            
        } else {
            setFavoriteButton("Add to Favorites");
            setNewStyle();
        }
    }

    async function addFavorites(id) {

        if (favButtonName === "Add to Favorites") {
            setNewStyle("library__buttons-favorite--active");
            setFavoriteButton("Remove From Favorites");
            try {
                await axios.post(URL+"/favorites/", {id});
            } catch(error) {console.error(error)};
        } else if (favButtonName === "Remove From Favorites") {
            setFavoriteButton("Add to Favorites");
            setNewStyle();
            try {
                await axios.delete(URL+"/favorites/"+id);
            } catch(error) {console.error(error)};
        }
    }
    return (
        <>
            <button className={`library__buttons library__buttons-favorite ${newStyle}`}  onClick={() => addFavorites(id)}>{favButtonName}</button>
        </>
    )
}