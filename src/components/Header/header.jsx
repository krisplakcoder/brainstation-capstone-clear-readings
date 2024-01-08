import { Link } from "react-router-dom"
import "./header.scss"

export default function Header() {

    return (
        <>
            <div className="navbar__container">
                <section className="navbar">
                    <Link to="/" className="navbar-title--link"><h1 className="navbar-title">Clear Readings</h1></Link>
                    <ul className="navbar-list">
                        <li className="navbar-list-item"><Link to="/library" className="navbar-title--link navbar-title--link-style">Library</Link></li>
                        <li className="navbar-list-item"><Link to="/favorites" className="navbar-title--link navbar-title--link-style">Favorites</Link></li>
                    </ul>
                </section>
            </div>
        </>
    )
}

// Notes
// Replace title with image that returns to the homepage