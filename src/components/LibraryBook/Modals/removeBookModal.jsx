import axios from "axios";
import "./removeBookModal.scss"

const URL = "http://localhost:8080";

export default function RemoveBookModal({bookID, toggleModal}) {


    async function deleteBook(event) {
        event.preventDefault();
        try {
            await axios.delete(`${URL}/library/${bookID}`);
            alert("The book has been deleted");
        } catch(error) {console.error(error)};
        await window.location.reload();      
    }

    return (
        <>
            <div className="removeBookmodal">
                <div className="remove-modal-card">
                    <div className="remove-modal-close-button">
                        <button className="remove-modal-close" onClick={() => toggleModal(false)}>X</button>
                    </div>
                    <h3>ARE YOU SURE?</h3>
                    <div className="remove-modal__buttons-container">
                        <button className="modal__buttons-cancel" onClick={() => toggleModal(false)}>No</button>
                        <button className="modal__buttons-add" onClick={deleteBook}>Yes</button>
                    </div>
                </div>
            </div>
        </>
    )
}