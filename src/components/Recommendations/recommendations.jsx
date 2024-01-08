import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import "./recommendations.scss"
const URL = "http://localhost:8080";

export default function Recommendations() {
    
    const [booklist, setBookList] = useState();
    const [newTitle, setTitle] = useState();
    const {pageID} = useParams();

    useEffect(() => {
        const getTitle = async () => {
            try {
                const response = await axios.get(URL+"/readinglist/"+pageID);
                setTitle(response.data.title);
            } catch(error) {console.error(error)};
        }; getTitle();
    }, [pageID]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.post(URL+"/recommendations", {title: newTitle});
                setBookList(response.data);
            } catch(error) {console.error(error)}
        }; getBooks();
    }, [newTitle]);

    function findBook(booktitle) {
        window.open(`http://www.google.com/search?q=${booktitle}`);
    }


    return (
        <>
            <section className="recommendations-section">
                <h2>My Recommendations</h2>
                <ul className="recommendations__card-container">
                    {booklist && booklist.map((bookdata) => {
                    return (    
                    <li key={bookdata.id} className="recommendations__card">
                        <div className="recommendations__book">
                            <div className="recommendations__book-cover">
                               <img src={(bookdata.cover.thumbnail ? bookdata.cover.thumbnail : " ")} alt="book cover" className="recommendations__book-cover-image" />
                            </div>
                            <div className="recommendations__book-details">
                                <div className="recommendations__book-details-title">
                                    <span className="recommendations__book-details--bold">{bookdata.title}</span>
                                </div>
                                <div className="recommendations__book-details-author">
                                    {bookdata.author}
                                </div>
                                <div className="recommendations__book-details-date">
                                    <span className="recommendations__book-details-title--bold">{bookdata.publishedDate}</span>
                                </div>
                                <div className="recommendations__search-button">
                                    <button className="recommendations__buttons-find" onClick={() => {findBook(bookdata.title)}}>Find</button>
                                </div>
                            </div>
                        </div>
                    </li>)})}
                </ul>
            </section>
        </>
    )
}

// Things to do:
// 1. Develop the function to close a card
// 2. Find better colors
// 3. Link the page to the backend using axios
// 4. Add component title to page
// 5. Fix the font for tablet and desktop