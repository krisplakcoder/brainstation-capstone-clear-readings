import bookdata from "../../assets/data/bookdata.json"
import "./readingList.scss"


export default function ReadingList() {

    let currentChapter = 12;
    return (
        <>
            <section className="reading-list-container">
                <h2>My Reading List</h2>
                <ul className="reading-list">
                    <li className="reading-book">
                        <div className="reading-book__image-div">
                            <img src={bookdata.image} className="reading-book-image" alt="book cover" />
                        </div>
                        <div className="reading-book__details">
                            <p className="reading-book__details-title">{bookdata.title}</p>
                            <p className="reading-book__details-author">By {bookdata.author}</p>
                            {/* change chapters to pages!!! <progress id="tracker-bar" className="tracker-bar-progress" value = {currentChapter} max={bookdata.chapters} /> */}
                            <div>Progress: 15/{bookdata.chapters}</div>
                        </div>
                        <div className="reading-book__description reading-book__description--tablet-desktop">
                            {bookdata.description}
                        </div>
                    </li>
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