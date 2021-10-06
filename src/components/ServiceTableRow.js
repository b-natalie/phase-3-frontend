import React from "react";

function ServiceTableRow({ service }) {
    return (
        <tr>
            <td>{service.time}</td>
            <td>{service.time}</td>
            <td>{service.name}</td>
            <td>{service.instructor}</td>
            <td>{service.client_count}</td>
            <td><button>Cancel</button></td>
        </tr>
    )
}

export default ServiceTableRow;