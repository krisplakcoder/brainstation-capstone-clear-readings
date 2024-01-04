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
                    <div className="modal-close-button">
                        <button className="modal-close" onClick={() => toggleModal(false)}>X</button>
                    </div>
                    <h3>Add a Book!</h3>
                    <form action="" className="addBook">
                        <div className="addBook-title">
                            <input type="text" name="title" placeholder="Enter Book Name" />
                        </div>
                        <input value={values.isbn} type="text" name="isbn" placeholder="Enter ISBN number" onChange={uploadFormChange}/>
                    </form>
                    <div className="modal__buttons-container">
                        <button className="modal__buttons-cancel" onClick={submitCancel}>Cancel</button>
                        <button type="submit" className="modal__buttons-add" onClick={submitBook}>Add to Library</button>
                    </div>
                </div>
            </div>
        </>
    )
}