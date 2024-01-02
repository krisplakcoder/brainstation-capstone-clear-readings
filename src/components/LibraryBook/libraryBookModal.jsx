
export default function LibraryModal({toggleModal, props}) {


    return (
        <>
            <div className="modal">
                <div className="modal-close-button">
                    <button className="modal-close" onClick={() => toggleModal(false)}>X</button>
                </div>
                <div className="modal__description-container">
                    <h3 className="modal-title">Description</h3>
                    <p className="modal__description">
                        {props.description}
                    </p>
                </div>
                <ul className="modal__details">
                    <li className="modal__details-list-item">{props.chapters}</li>
                    <li className="modal__details-list-item">{props.genre}</li>
                </ul>
                <div className="modal__buttons-container">
                    <button className="modal__buttons-reading-list">Add to Reading List</button>
                    <button className="modal__buttons-remove">Remove From Library</button>
                </div>
            </div>
        </>
    )
}