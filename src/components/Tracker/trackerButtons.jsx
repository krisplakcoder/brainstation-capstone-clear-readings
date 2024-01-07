import { useState } from "react";

export default function TrackerButtons({page, totalPages}) {

    const [currentPage, setCurrentChapter] = useState(page);
    console.log("page is: ", page);
    function reduceChapterCount() {
        if (currentPage > 1) {
            setCurrentChapter(currentPage - 1);
        }
    }

    function increaseChapterCount() {
        if (currentPage < totalPages) {
            setCurrentChapter(currentPage + 1);
        }
    }


    return (
        <>
            <div className="tracker-bar">
                <label htmlFor="tracker-bar" className="tracker-chapter">Page: {currentPage}/{totalPages}</label>
                <progress id="tracker-bar" className="tracker-bar-progress" value = {currentPage} max={totalPages} />
            </div>
            <div className="tracker-buttons">
                <button className="tracker-button tracker-buttons--minus" onClick={reduceChapterCount}>-</button>
                <button className="tracker-button tracker-buttons--add" onClick={increaseChapterCount}>+</button>
            </div>
        </>
    )
}