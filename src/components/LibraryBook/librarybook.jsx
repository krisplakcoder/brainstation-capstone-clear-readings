import { useState, useEffect } from "react";
import axios from "axios";
import "./librarybook.scss"
import LibraryModal from "./libraryBookModal";
import AddBookModal from "./addBookModal";
import RemoveBookModal from "./removeBookModal";
const URL = "http://localhost:8080";


export default function LibraryBook() {

    const [modalState, setModalState] = useState(false);
    const [favoriteMode, setFavoriteMode] = useState("favorite-mode-off");
    const [favButtonName, setFavoriteButton ] = useState("Add to Favorites");
    const [addBookModalState, setAddModalState] = useState(false);
    const [removeBookState, setRemoveModalState] = useState(false);
    const [bookList, setBookList] = useState();
    const [bookModalData, setBookModalData] = useState(); 

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get(URL + "/library");
                setBookList(response.data);
                console.log(response.data);
            } catch(error) {console.log(error)};
        }
        getBooks();
    }, []);

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
                <ul>
                {bookList && bookList.map((bookdata) => {
                return (
                    <>
                    <li key={bookdata.id} className="library__card-container">
                        <div  className={`library__card library__card--${favoriteMode}`}> 
                            <div className="library__book">
                                <div className="library__book-cover">
                                    <img src={bookdata.cover} alt="book cover" className="library__book-cover-image library__book-cover-image--mobile" onClick={() => {setModalState(true); setBookModalData(bookdata)}}/>
                                    <img src={bookdata.cover} alt="book cover" className="library__book-cover-image library__book-cover-image--tablet-desktop"/>
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
                                    <p className="library__book-description--overflow">{bookdata.description}</p>
                                </div>
                                <div className="library__buttons-container library__buttons--tablet-desktop library__book-section-tablet-desktop">
                                    <button className="library__buttons library__buttons-reading-list">Add to Reading List</button>
                                    <button className="library__buttons library__buttons-favorite" onClick={addFavorites}>{favButtonName}</button>
                                    <button className="library__buttons library__buttons-remove" onClick={() => setRemoveModalState(true)}>Remove From Library</button>
                                </div>
                            </div>
                        </div>
                    </li></>)}) }
                </ul>
            </section>
            {modalState && <LibraryModal props={bookModalData} toggleModal={setModalState}/>}
            {addBookModalState ? <AddBookModal toggleModal={setAddModalState} /> : null}
            {removeBookState ? <RemoveBookModal toggleModal={setRemoveModalState} /> : null}

        </>
    )
}