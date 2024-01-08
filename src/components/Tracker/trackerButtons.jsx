import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const URL = "http://localhost:8080";


export default function TrackerButtons({page, totalPages, id}) {

    const [newPage, setNewPage] = useState() 
    const [trackerState, setTrackerState] = useState();

    const {changePageValue} = useParams();

    useEffect(() => {
        const updatePage = async () => {
            try {
                
                await axios.put(URL+"/readinglist/"+id, {currentPage: newPage});
            } catch(error) {console.error(error)};
        }; updatePage();
 
    }, [newPage]);

    useEffect(() => {
        setNewPage(page);
    }, [page])

    console.log("page: ", page);
    console.log("new page: ", newPage);
    
    function reduceChapterCount() {
        if (newPage > 1) {
            setNewPage(newPage - 1);
        }
    }

    function increaseChapterCount() {
        if (newPage < totalPages) {
            setNewPage(newPage + 1);
        }
    }

    
     useEffect(() => {
        const checkTracker = () => {
            console.log(newPage, totalPages);
            if (newPage === totalPages || page === totalPages) {
                setTrackerState(
                <div className="tracker-bar--complete">
                    <div className="tracker-bar--complete-message"><h3>Completed!!!</h3></div>
                </div>)
            } else {
                setTrackerState(
                 <div className="tracker-bar">
                    <label htmlFor="tracker-bar" className="tracker-chapter">Page: {newPage}/{totalPages}</label>
                    <progress id="tracker-bar" className="tracker-bar-progress" value = {newPage} max={totalPages} />
                </div>)
            }
        }; checkTracker();
    },[newPage])

    return (
        <>
            {trackerState}
            <div className="tracker-buttons">
                <button className="tracker-button tracker-buttons--minus" onClick={reduceChapterCount}>-</button>
                <button className="tracker-button tracker-buttons--add" onClick={increaseChapterCount}>+</button>
            </div>
        </>
    )
}