import "./addBookModal.scss"

export default function AddBookModal({toggleModal}) {


    return (
        <>
            <div className="addBookmodal">
                <div className="modal-card">
                    <div className="modal-close-button">
                        <button className="modal-close" onClick={() => toggleModal(false)}>X</button>
                    </div>
                    <h3>Add a Book!</h3>
                    <form action="" className="addBook">
                        <div className="addBook-title">
                            <input type="text" name="title" placeholder="Enter Book Name"/>
                        </div>
                        <input type="text" name="isbn" placeholder="Enter ISBN number"/>
                    </form>
                    <div className="modal__buttons-container">
                        <button className="modal__buttons-cancel">Cancel</button>
                        <button type="submit" className="modal__buttons-add">Add to Library</button>
                    </div>
                </div>
            </div>
        </>
    )
}