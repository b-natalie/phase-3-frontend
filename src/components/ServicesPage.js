import React, { useEffect, useState } from "react";
import ServicesContainer from "./ServicesContainer";

function ServicesPage() {

    const [ servicesArray, setServicesArray ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/services")
        .then(resp => resp.json())
        .then(data => setServicesArray(data))
    }, [])

    return (
        <div>
            Services
            <ServicesContainer servicesArray = {servicesArray} />
        </div>
    )
}

export default ServicesPage;