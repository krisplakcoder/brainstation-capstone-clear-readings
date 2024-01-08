import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../Modal/modal";
import TrackerButtons from "./trackerButtons";

import "./tracker.scss"

const URL = "http://localhost:8080";


export default function Tracker() {

    const [modalState, setModalState] = useState(false);
    const [bookdata, setBookData] = useState();

    const {pageID} = useParams();

    useEffect(() => {
        const getBookData = async () => {
            try {
                const response = await axios.get(URL + "/readinglist/" + pageID);
                setBookData(response.data);        
            } catch(error) {console.error(error)}
        }; getBookData();
    }, [pageID]);

    return (
        <>{bookdata &&
            <section className="tracker">
                <div className="tracker-book">
                    <h1 className="tracker-book-title">{bookdata.title}</h1>
                    <div className="tracker-image__container"><img src={bookdata.cover} alt="current book cover" className="tracker-image tracker-image--mobile" onClick={() => setModalState(true)}/></div>
                    <div className="tracker-image__container"><img src={bookdata.cover} alt="current book cover" className="tracker-image tracker-image--tablet-desktop" /></div>        
                    <TrackerButtons page={bookdata.currentPage} totalPages={bookdata.pageCount} id={pageID}/>
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
            </section> }
            { modalState ? <Modal props={bookdata} toggleModal={setModalState} /> : null } 
        </>
    )
}