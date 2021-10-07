import moment from "moment";
import React, { useState } from "react";
import Datetime from 'react-datetime';

function ServiceAddClassForm({ performAddService }) {

    const [ newServiceInput, setNewServiceInput ] = useState({
        date: "",
        time: "",
        name: "",
        instructor: "",
        description: "",
        duration: 0,
        price: 0
    })

    function handleInput(event) {
        setNewServiceInput({
            ...newServiceInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAdd() {
        const newServiceObj = {
            time: moment(newServiceInput.date + "T" + newServiceInput.time + ":00").format("YYYY-MM-DDTHH:mm:ss.SSS"),
            name: newServiceInput.name,
            instructor: newServiceInput.instructor,
            description: newServiceInput.description,
            duration: newServiceInput.duration,
            price: newServiceInput.price
        }

        debugger

        // console.log(newServiceObj)
        performAddService(newServiceObj);
    }

    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <input type="date" name="date" placeholder="Date" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="time" name="time" placeholder="Time" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="name" placeholder="Class Name" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="instructor" placeholder="Instructor" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="description" placeholder="Description" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="duration" placeholder="Duration" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="price" placeholder="Price" className="form-control" onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default ServiceAddClassForm;