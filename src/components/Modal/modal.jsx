import "./modal.scss"

export default function Modal({toggleModal, props}) {


    return (
        <>
            <div className="modal">
                <h2 className="modal-title">Description</h2>
                <p className="modal__description">
                    {props.description}
                </p>
                <ul className="modal__list-container">
                    <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Author: {props.author}</span></li>
                    <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">Published Date: {props.publishedDate}</span></li>
                    <li className="tracker-details__list-item"><span className="tracker-details__list-item--title">ISBN: {props.isbn}</span></li>
                </ul>
                <button className="modal-close" onClick={() => toggleModal(false)}>Close</button>
            </div>
        </>
    )
}