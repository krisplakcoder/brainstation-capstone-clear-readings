import Modal from "../Modal/modal";
import { useState } from "react"
import bookdata from "../../assets/data/bookdata.json"
import "./tracker.scss"

export default function Tracker() {

    const [currentChapter, setCurrentChapter] = useState(1);
    const [modalState, setModalState] = useState(false);

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
                    <img src={bookdata.image} alt="current book cover" className="tracker-image tracker-image--mobile" onClick={() => setModalState(true)}/>
                    <img src={bookdata.image} alt="current book cover" className="tracker-image tracker-image--tablet-desktop" />
                    <div className="tracker-bar">
                        <label htmlFor="tracker-bar" className="tracker-chapter">Chapter: {currentChapter}/{bookdata.chapters}</label>
                        <progress id="tracker-bar" className="tracker-bar-progress" value = {currentChapter} max={bookdata.chapters} />
                    </div>
                    
                    <div className="tracker-buttons">
                        <button className="tracker-button tracker-buttons--minus" onClick={reduceChapterCount}>-</button>
                        <button className="tracker-button tracker-buttons--add" onClick={increaseChapterCount}>+</button>
                    </div>             
                </div>
                <div className="tracker-details tracker-details--tablet-desktop">
                    <h3 className="tracker-details-description-title">Description</h3>
                    <p className="tracker-details__description">
                        {bookdata.description}
                    </p>
                    <ul className="tracker-details__list-container">
                        <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Author:</span> {bookdata.author}</li>
                        <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Published Date:</span> {bookdata.publishedDate}</li>
                        <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">ISBN:</span>  {bookdata.isbn}</li>
                    </ul>
                </div>
            </section>
            { modalState ? <Modal props={bookdata} toggleModal={setModalState} /> : null }
        </>
    )
}