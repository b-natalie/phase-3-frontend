import React, { useEffect, useState } from "react";
import ClientsContainer from "./ClientsContainer";

function ClientsPage() {

    const [ clientsArray, setClientsArray ] = useState([]);
    const [ isDeletedClient, setIsDeletedClient ] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/clients")
        .then(resp => resp.json())
        .then(clientsData => setClientsArray(clientsData))
    }, [])

    return (
        <div>
            <ClientsContainer clientsArray={clientsArray}/>
        </div>
    )
}

export default ClientsPage;