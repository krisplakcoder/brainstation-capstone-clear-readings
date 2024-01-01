import bookdata from "../../assets/data/bookdata.json"
import axios from "axios"
import "./recommendations.scss"

export default function Recommendations() {

    function findBook() {
        window.open(`http://www.google.com/search?q=${bookdata.title}`);
    }

    return (
        <>
            <section className="recommendations-section">
                <div className="recommendations__card">
                    <div className="recommendations__buttons--close">
                        <button className="close">X</button>
                    </div>
                    <div className="recommendations__book">
                        <div className="recommendations__book-cover">
                            <img src={bookdata.image} alt="book cover" className="recommendations__book-cover-image" />
                        </div>
                        <div className="recommendations__book-details">
                            <div className="recommendations__book-details-title">
                                <span className="recommendations__book-details--bold">{bookdata.title}</span>
                            </div>
                            <div className="recommendations__book-details-author">
                                <span className="recommendations__book-details--bold">{bookdata.author}</span>
                            </div>
                            <div className="recommendations__book-details-date">
                                <span className="recommendations__book-details-title--bold">{bookdata.publishedDate}</span>
                            </div>
                            <div className="recommendations__search-button">
                                <button className="recommendations__buttons-find" onClick={findBook}>Find</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// Things to do:
// 1. Develop the function to close a card
// 2. Find better colors
// 3. Link the page to the backend using axios
// 4. Add component title to page
// 5. Fix the font for tablet and desktop