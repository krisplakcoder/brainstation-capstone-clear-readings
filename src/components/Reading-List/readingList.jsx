// import bookdata from "../../assets/data/bookdata.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./readingList.scss"
const URL = "http://localhost:8080";


export default function ReadingList() {

    const [readingList, setReadingList] = useState();
    const {pageID} = useParams();

    useEffect(() => {
        const getReadingList = async () => {
            try {
                const response = await axios.get(URL + "/readinglist");
                setReadingList(response.data);
            } catch(error) {console.error(error)}
        }; getReadingList();
    }, [pageID])

    let currentChapter = 12;
    return (
        <>
            <section className="reading-list-container">
                <h2 className="reading-list__title">My Reading List</h2>
                <ul className="reading-list">
                    {readingList && readingList.map((bookdata) => {
                        return (
                            <li key={bookdata.id} className="reading-book">
                                <div className="reading-book__image-div">
                                    <img src={bookdata.cover} className="reading-book-image" alt="book cover" />
                                </div>
                                    <div className="reading-book__details">
                                        <p className="reading-book__details-title">{bookdata.title}</p>
                                        <p className="reading-book__details-author">By {bookdata.author}</p>
                                    {/* change chapters to pages!!! <progress id="tracker-bar" className="tracker-bar-progress" value = {currentChapter} max={bookdata.chapters} /> */}
                                    <div className="reading-book__progress-container">
                                        <label htmlFor="progress-bar" className="reading-book__progress-label">Progress: {bookdata.currentPage}/{bookdata.pageCount} Pages</label>
                                        <progress id="progress-bar" className="reading-book__progress-bar" value={bookdata.currentPage} max={bookdata.pageCount} />
                                    </div>
                                </div>
                            </li>
                        )})}
                </ul>
            </section>
        </>
    )
}

// Things to do:
// 1. Add a maximum word limit to decription
// 2. Add a model to show the full description
// 3. Change "chapters" to pages
// 4. Include a function to create a list