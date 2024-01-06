import axios from "axios";
import { useState } from "react";
import "./addBookModal.scss"

const URL = "http://localhost:8080";

export default function AddBookModal({toggleModal}) {

    const [values, setValues] = useState("");

    const uploadFormChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const submitCancel = (event) => {
        event.preventDefault();
        values.title = ("");
        values.isbn = ("");
    }

    const submitBook = async (event) => {
        event.preventDefault();
        if (values.isbn == "") {
            alert("please enter an ISBN key");
        } else { 
            axios.post((URL + "/library"), values)
            .then(response => {
                console.log("Response: ", response.data.message);
            })
            .catch(error => {console.error("error: ", error.response.data.error)})
            .then(alert("Your book has been uploaded"));
            await window.location.reload();      
        }
    };

    return (
        <>
            <div className="addBookmodal">
                <div className="modal-card">
                    <div className="modal-close">
                        <button className="modal-close__button" onClick={() => toggleModal(false)}>X</button>
                    </div>
                    <h3 className="modal-card__title">Add a Book!</h3>
                    <form action="" className="addBook__form">
                        <div className="addBook__form-input addBook__form-input-title">
                            <label htmlFor="title" className="addBook__form-title-name">Title:</label>
                            <input type="text" name="title" placeholder="Enter Book Name" />
                        </div>
                        <div className="addBook__form-input addBook__form-input-isbn">
                            <label htmlFor="isbn" className="addBook__form-title-isbn">ISBN:</label>
                            <input value={values.isbn} type="text" name="isbn" placeholder="Enter ISBN number" onChange={uploadFormChange}/>
                        </div>
                    </form>
                    <div className="modal__buttons-container">
                        <button className="modal__buttons modal__buttons-cancel" onClick={submitCancel}>Cancel</button>
                        <button type="submit" className="modal__buttons modal__buttons-add" onClick={submitBook}>Add to Library</button>
                    </div>
                </div>
            </div>
        </>
    )
}