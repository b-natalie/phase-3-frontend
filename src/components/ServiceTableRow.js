import React, { useState } from "react";
import { Link } from "react-router-dom";

function ServiceTableRow({ service, performDelete, performEdit }) {

    const { name, description, duration, time, instructor, price } = service

    const [ editMode, setEditMode ] = useState(false);
    const [ updatedInput, setUpdatedInput ] = useState({
        name,
        description, 
        time,
        duration,
        price, 
        instructor
    })

    function handleInput(event) {
        setUpdatedInput({
            ...updatedInput,
            [event.target.name] : event.target.value
        })
    }

    function handleSave(event) {

        const updatedObj = {
            name: updatedInput.name,
            description: updatedInput.description,
            time: updatedInput.time,
            duration: updatedInput.duration,
            price: updatedInput.price,
            instructor: updatedInput.instructor
        }

        performEdit(updatedObj, service.id)
        handleEditMode();
    }

    function handleEditMode() {
        setEditMode(!editMode)
    }

    function handleCancel() {
        // console.log(service.id)
        performDelete(service.id)
    }

    function displayRow() {
        if (!editMode) {
            return (
                <tr>
                    <td>{service.time}</td>
                    <td>{service.time}</td>
                    <td><Link to={`services/${service.id}`}>{service.name}</Link></td>
                    <td>{service.instructor}</td>
                    <td>{service.client_count}</td>
                    <td><button onClick={handleEditMode} type="button" className="btn btn-secondary">Edit</button></td>
                    <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><input type="text" name="date" className="form-control" value={updatedInput.time} onChange={handleInput}/></td>
                    <td><input type="text" name="time" className="form-control" value={updatedInput.time} onChange={handleInput}/></td>
                    <td><input type="text" name="name" className="form-control" value={updatedInput.name} onChange={handleInput}/></td>
                    <td><input type="text" name="instructor" className="form-control" value={updatedInput.instructor} onChange={handleInput}/></td>
                    <td>{service.client_count}</td>
                    <td><button onClick={handleSave} type="button" className="btn btn-secondary">Save</button></td>
                    <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        }
    }

    return (
        // <tr>
        //     <td>{service.time}</td>
        //     <td>{service.time}</td>
        //     <td>{service.name}</td>
        //     <td>{service.instructor}</td>
        //     <td>{service.client_count}</td>
        //     <td><button onClick={handleEditMode} type="button" className="btn btn-secondary">Edit</button></td>
        //     <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
        // </tr>
        <>
            {displayRow()}
        </>
    )
}

export default ServiceTableRow;