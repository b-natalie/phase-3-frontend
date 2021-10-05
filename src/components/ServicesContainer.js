function ServicesContainer() {

    function getServices() {
        fetch("http://localhost:9292/services")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

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
            ServicesContainer here
            {console.log(getServices())}
        </div>
    )
}

export default ServicesContainer;