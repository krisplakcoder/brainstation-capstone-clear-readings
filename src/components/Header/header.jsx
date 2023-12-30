import { Link } from "react-router-dom"
import "./header.scss"

export default function Header() {

    return (
        <>
            <section className="navbar">
                <Link to="/" className="navbar-title--link"><h1 className="navbar-title">Clear Readings</h1></Link>
                <ul className="navbar-list">
                    <li className="navbar-list-item">Library</li>
                    <li className="navbar-list-item">Favorites</li>
                </ul>
            </section>
        </>
    )
}

// Notes
// Replace title with image that returns to the homepage