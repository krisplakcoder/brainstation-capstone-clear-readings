import { useState
 } from "react";
export default function LibraryModal({toggleModal, props}) {

    const [favoriteMode, setFavoriteMode] = useState("favorite-mode-off");
    const [favButtonName, setFavoriteButton ] = useState("Add to Favorites");

    function addFavorites() {
        if (favoriteMode === "favorite-mode-on") {
            setFavoriteMode("favorite-mode-off");
            setFavoriteButton("Add to Favorites")
        } else {
            setFavoriteMode("favorite-mode-on");
            setFavoriteButton("Remove from Favorites")

        }
        return favButtonName;
    }


    return (
        <>
            <div className="modal">
                <div className="modal-close-button">
                    <button className="modal-close" onClick={() => toggleModal(false)}>X</button>
                </div>
                <div className="modal__description-container">
                    <h3 className="modal-title">Description</h3>
                    <p className="modal__description">
                        {props.description}
                    </p>
                </div>
                <ul className="modal__details">
                    <li className="modal__details-list-item">{props.pageCount}</li>
                    {/* <li className="modal__details-list-item">{props.genre}</li> */}
                </ul>
                <div className="library__buttons-container--mobile">
                    <button className="library__buttons library__buttons-reading-list">Add to Reading List</button>
                    <button className="library__buttons library__buttons-favorite" onClick={addFavorites}>{favButtonName}</button>
                    <button className="library__buttons library__buttons-remove" onClick={() => setRemoveModalState(true)}>Remove From Library</button>
                </div>
            </div>
        </>
    )
}