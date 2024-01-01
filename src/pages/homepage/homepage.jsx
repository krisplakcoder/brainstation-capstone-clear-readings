import Header from "../../components/Header/header";
import Tracker from "../../components/Tracker/tracker";
import ReadingList from "../../components/Reading-List/readingList";
import "./homepage.scss";

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="tracking-books__container">
                <div className="tracking-books">
                    <Tracker />
                    <ReadingList />
                </div>
            </div>
            <h1>I am a HomePage</h1>
        </>
    )
}