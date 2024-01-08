import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:8080";


export default function TrackerButtons({page, totalPages, id}) {

    const [newPage, setNewPage] = useState(page);

    useEffect(() => {
        const updatePage = async () => {
            try {
                await axios.put(URL+"/readinglist/"+id, {currentPage: newPage});
            } catch(error) {console.error(error)};
        }; updatePage();
    }, [newPage]);
    
    async function reduceChapterCount() {
        if (newPage > 1) {
            setNewPage(newPage - 1);
        }
    }

    async function increaseChapterCount() {
        if (newPage < totalPages) {
            setNewPage(newPage + 1);
        }
    }

    console.log(page, totalPages)
    return (
        <>
            <div className="tracker-bar">
                <label htmlFor="tracker-bar" className="tracker-chapter">Page: {newPage}/{totalPages}</label>
                <progress id="tracker-bar" className="tracker-bar-progress" value = {newPage} max={totalPages} />
            </div>
            <div className="tracker-buttons">
                <button className="tracker-button tracker-buttons--minus" onClick={reduceChapterCount}>-</button>
                <button className="tracker-button tracker-buttons--add" onClick={increaseChapterCount}>+</button>
            </div>
        </>
    )
}