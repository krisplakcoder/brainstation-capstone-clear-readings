import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:8080";

export default function FavList() {

    const [bookList, setBookList] = useState();

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const response = await axios.get(URL+"/favorites");
                setBookList(response.data);
            } catch(error) {console.error(error)};
        }; getFavorites();
    }, []);

    return (

        <>
            <section className="library-section">
                <ul>
                {bookList && bookList.map((bookdata) => {
                return (
                    
                    <li key={bookdata.id} className="library__card-container">
                        <div  className={`library__card library__favorite`}> 
                            <div className="library__book">
                                <div className="library__book-cover">
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
                            </div>
                        </div>
                    </li>)}) }
                </ul>
            </section>
        </>
    )
}