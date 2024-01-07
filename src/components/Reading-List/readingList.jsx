import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./readingList.scss"
const URL = "http://localhost:8080";


export default function ReadingList() {

    const [readingList, setReadingList] = useState();
    const {pageID} = useParams();

    useEffect(() => {
        const getReadingList = async () => {
            try {
                const response = await axios.get(URL + "/readinglist");
                if (pageID == undefined) {  
                    setReadingList(response.data.splice(1));
                }   else {
                    setReadingList(response.data.filter((book) => {return book.id != pageID;}));
                }
            } catch(error) {console.error(error)}
        }; getReadingList();
    }, [pageID])

    return (
            <section className="reading-list-container">
                <h2 className="reading-list__title">My Reading List</h2>
                <ul className="reading-list">
                    {readingList && readingList.map((bookdata) => {
                        return (
                            <Link to={"/"+bookdata.id} key={bookdata.id} className="reading-list__link--style"><li className="reading-book">
                                <div className="reading-book__image-div">
                                    <img src={bookdata.cover} className="reading-book-image" alt="book cover" />
                                </div>
                                    <div className="reading-book__details">
                                        <p className="reading-book__details-title">{bookdata.title}</p>
                                        <p className="reading-book__details-author">By {bookdata.author}</p>
                                    <div className="reading-book__progress-container">
                                        <label htmlFor="progress-bar" className="reading-book__progress-label">Progress: {bookdata.currentPage}/{bookdata.pageCount} Pages</label>
                                        <progress id="progress-bar" className="reading-book__progress-bar" value={bookdata.currentPage} max={bookdata.pageCount} />
                                    </div>
                                </div>
                            </li></Link>
                        )})}
                </ul>
            </section>
    )
}

