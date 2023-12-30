import Modal from "../Modal/modal";
import { useState } from "react"
import bookdata from "../../assets/data/bookdata.json"
import "./tracker.scss"

export default function Tracker() {

    const [currentChapter, setCurrentChapter] = useState(1);

    function reduceChapterCount() {
        if (currentChapter > 1) {
            setCurrentChapter(currentChapter - 1);
        }
    }

    function increaseChapterCount() {
        if (currentChapter < bookdata.chapters) {
            setCurrentChapter(currentChapter + 1);
        }
    }


    return (
        <>
            <section className="tracker">
                <div className="tracker-book">
                    <h1 className="tracker-book-title">{bookdata.title}</h1>
                    <img src={bookdata.image} alt="current book cover" className="tracker-image" />
                    <div className="tracker-bar">
                        <label htmlFor="tracker-bar" className="tracker-chapter">Chapter: {currentChapter}/{bookdata.chapters}</label>
                        <progress id="tracker-bar" className="tracker-bar-progress" value = {currentChapter} max={bookdata.chapters} />
                    </div>
                    
                    <div className="tracker-buttons">
                        <button className="tracker-buttons--minus" onClick={reduceChapterCount}>-</button>
                        <button className="tracker-buttons--add" onClick={increaseChapterCount}>+</button>
                    </div>             
                </div>
                <div className="tracker-details tracker-details--tablet-desktop">
                    <h2 className="tracker-details-description-title">Description</h2>
                    <p className="tracker-details__description">
                        {bookdata.description}
                    </p>
                    <ul className="tracker-details__list-container">
                        <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Author: {bookdata.author}</span></li>
                        <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Published Date: {bookdata.publishedDate}</span></li>
                        <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">ISBN: {bookdata.isbn}</span></li>
                    </ul>
                </div>
            </section>
            <Modal props={bookdata} />
        </>
    )
}