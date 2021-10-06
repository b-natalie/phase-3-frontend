import React, { useEffect, useState } from "react";
import ServicesContainer from "./ServicesContainer";

function ServicesPage() {

    const [ servicesArray, setServicesArray ] = useState([]);
    const [ isDeletedService, setIsDeletedService ] = useState(false);
    const [ isUpdatedService, setIsUpdatedService ] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9292/services")
        .then(resp => resp.json())
        .then(data => setServicesArray(data))
    }, [isDeletedService, isUpdatedService])

    function performDelete(deleteServiceId) {
        fetch(`http://localhost:9292/services/${deleteServiceId}`, {
            method: "DELETE"
        })
        // .then(resp => {
        //     // debugger
        //     resp.json()
        // })
        .then(data => setIsDeletedService(!isDeletedService))
    }

    function performEdit(updatedServiceObj, serviceId) {
        fetch(`http://localhost:9292/services/${serviceId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedServiceObj)
        })
        // .then(resp => resp.json())
        .then(data => setIsUpdatedService(!isUpdatedService))
    }

    return (
        <div>
            <ServicesContainer 
                servicesArray={servicesArray} 
                performDelete={performDelete}
                performEdit={performEdit}
            />
        </div>
    )
}

export default ServicesPage;