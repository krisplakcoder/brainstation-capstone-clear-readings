import "./modal.scss"

export default function Modal({props}) {

    return (
        <>
            <div className="tracker-details tracker-details--tablet-desktop">
                <h2 className="tracker-details-description-title">Description</h2>
                <p className="tracker-details__description">
                    {props.description}
                </p>
                <ul className="tracker-details__list-container">
                    <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Author: {props.author}</span></li>
                    <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Published Date: {props.publishedDate}</span></li>
                    <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">ISBN: {props.isbn}</span></li>
                </ul>
            </div>
        </>
    )
}