import React from "react";
import ServiceTableRow from "./ServiceTableRow";

function ServicesContainer({ servicesArray, performDelete, performEdit }) {

    // function createService(formData) {
    //     const { name, description, time, duration, price } = formData

    //     const service = {
    //         name,
    //         description,
    //         time,
    //         duration,
    //         price
    //     }

    //     fetch("http://localhost:9292/services", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(service)
    //     })
    //     .then(resp => resp.json())
    //     .then(service => console.log(service))
    // }

    // debugger;

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Class</th>
                        <th scope="col">Instructor</th>
                        <th scope="col">Enrolled</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Cancel Class</th>
                    </tr>
                </thead>
                <tbody>
                    {servicesArray.map(service => {
                        return (
                            <ServiceTableRow key={service.id} service={service} performDelete={performDelete} performEdit={performEdit}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ServicesContainer;