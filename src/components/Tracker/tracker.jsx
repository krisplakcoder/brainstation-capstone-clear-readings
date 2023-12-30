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
            <p>The book title is: {bookdata.title}</p>
            <img src={bookdata.image} alt="current book cover" className="tracker-image" />
            <div className="progress-bar">
                <progress value = {currentChapter} max={bookdata.chapters} />
            </div>
            <div className="buttons">
                <button className="minus" onClick={reduceChapterCount}>-</button>
                <button className="add" onClick={increaseChapterCount}>+</button>
            </div>
            <div className="chapter">
                {currentChapter}/{bookdata.chapters}
            </div>
            <h1>Tracker goes here!</h1>
        </>
    )
}