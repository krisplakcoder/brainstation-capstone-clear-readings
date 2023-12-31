import Header from "../../components/Header/header";
import Tracker from "../../components/Tracker/tracker";
import ReadingList from "../../components/Reading-List/readingList";

export default function HomePage() {
    return (
        <>
            <Header />
            <Tracker />
            <ReadingList />
            <h1>I am a HomePage</h1>
        </>
    )
}