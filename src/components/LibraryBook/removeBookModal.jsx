import "./removeBookModal.scss"

export default function RemoveBookModal({toggleModal}) {


    return (
        <>
            <div className="removeBookmodal">
                <div className="remove-modal-card">
                    <div className="remove-modal-close-button">
                        <button className="remove-modal-close" onClick={() => toggleModal(false)}>X</button>
                    </div>
                    <h3>ARE YOU SURE?</h3>
                    <div className="remove-modal__buttons-container">
                        <button className="modal__buttons-cancel">No</button>
                        <button className="modal__buttons-add">Yes</button>
                    </div>
                </div>
            </div>
        </>
    )
}