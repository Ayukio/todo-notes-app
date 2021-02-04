import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alert-context";

export const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = e => {
            e.preventDefault()

            if (value.trim()) {
                alert.show("Note was created!", 'success')
            } else {
                alert.show("Enter a title of note!")
            }
        }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Enter title of your note"
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}