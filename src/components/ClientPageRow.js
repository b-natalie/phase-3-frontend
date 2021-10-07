import React, { useState } from "react";

function ClientPageRow({ client }) {

    const [ isEditMode, setIsEditMode ] = useState(false)
    const [ clientInfo, setClientInfo ] = useState({
        first: client.first_name,
        last: client.last_name,
        email: client.email
    })

    function handleInput(event) {
        setClientInfo({
            ...clientInfo,
            [event.target.name]: event.target.value
        })
    }

    function handleIsEditMode() {
        setIsEditMode(!isEditMode)
    }

    function displayRow() {
        if (!isEditMode) {
            return (
                <tr>
                    <td>{client.first_name}</td>
                    <td>{client.last_name}</td>
                    <td>{client.email}</td>
                    <td><button type="button" className="btn btn-secondary" onClick={handleIsEditMode}>Edit</button></td>
                    <td><button type="button" className="btn btn-danger">Delete</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><input type="text" name="first" className="form-control" value={clientInfo.first} onChange={handleInput}/></td>
                    <td><input type="text" name="last" className="form-control" value={clientInfo.last} onChange={handleInput}/></td>
                    <td><input type="text" name="email" className="form-control" value={clientInfo.email} onChange={handleInput}/></td>
                    <td><button type="button" className="btn btn-secondary">Save</button></td>
                    <td><button type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        }
    }

    return (
        <>
            {displayRow()}
        </>
    )
}

export default ClientPageRow;