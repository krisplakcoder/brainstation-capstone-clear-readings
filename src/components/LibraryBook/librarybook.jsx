import { useState } from "react";
import "./librarybook.scss"
import bookdata from "../../assets/data/bookdata.json"
import LibraryModal from "./libraryBookModal";
import AddBookModal from "./addBookModal";
import RemoveBookModal from "./removeBookModal";


export default function LibraryBook() {

    const [modalState, setModalState] = useState(false);
    const [favoriteMode, setFavoriteMode] = useState("favorite-mode-off");
    const [favButtonName, setFavoriteButton ] = useState("Add to Favorites");
    const [addBookModalState, setAddModalState] = useState(false);
    const [removeBookState, setRemoveModalState] = useState(false);

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
            <section className="library-section">
                <div className="button__container">
                    <button className="addBook" onClick={() => setAddModalState(true)}>Add a Book</button>
                </div>
                <ul className="library__card-container">
                    <li className={`library__card library__card--${favoriteMode}`}>
                        <div className="library__book">
                            <div className="library__book-cover">
                                <img src={bookdata.image} alt="book cover" className="library__book-cover-image" onClick={() => setModalState(true)}/>
                            </div>
                            <div className="library__book-details">
                                <div className="library__book-details-title">
                                    <span className="library__book-details--bold">{bookdata.title}</span>
                                </div>
                                <div className="library__book-details-author">
                                    <span className="library__book-details--bold">{bookdata.author}</span>
                                </div>
                                <div className="library__book-details-date">
                                    <span className="library__book-details-title--bold">{bookdata.publishedDate}</span>
                                </div>
                            </div>
                            <div className="library__book-description library__book-section-tablet-desktop">
                                <p>{bookdata.description}</p>
                            </div>
                            <div className="library__buttons-container library__book-section-tablet-desktop">
                                <button className="library__buttons library__buttons-reading-list">Add to Reading List</button>
                                <button className="library__buttons library__buttons-favorite" onClick={addFavorites}>{favButtonName}</button>
                                <button className="library__buttons library__buttons-remove" onClick={() => setRemoveModalState(true)}>Remove From Library</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            { modalState ? <LibraryModal props={bookdata} toggleModal={setModalState} /> : null}
            {addBookModalState ? <AddBookModal props={bookdata} toggleModal={setAddModalState} /> : null}
            {removeBookState ? <RemoveBookModal toggleModal={setRemoveModalState} /> : null}

        </>
    )
}