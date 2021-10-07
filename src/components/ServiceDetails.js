import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ClientRow from "./ClientRow";
import ServiceAddClient from "./ServiceAddClientForm";

function ServiceDetails() {

    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isDeleted, setIsDeleted ] = useState(false)
    const [ serviceDetailsObj, setServiceDetailsObj ] = useState({
        name: "",
        description: "",
        time: "",
        duration: 60,
        price: 10,
        instructor: "",
        clients: []
    });

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:9292/services/${id}`)
        .then(resp => resp.json())
        .then(service => {
            setServiceDetailsObj(service)
            setIsLoaded(!isLoaded)
        })
    }, [isDeleted])

    function deleteReservation(resId) {
        fetch(`http://localhost:9292/reservations/${resId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeleted(!isDeleted))
    }

    return (
        <div>
            <ServiceAddClient />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cancel Class</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceDetailsObj.clients.map((client, index) => {
                        return (
                            <ClientRow key={client.id} client={client} index={index} deleteReservation={deleteReservation}/>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/services"><button type="button" className="btn btn-secondary">Go Back</button></Link>
        </div>
    )
}

export default ServiceDetails;