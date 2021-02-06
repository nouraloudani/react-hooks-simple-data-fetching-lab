import React, { useState, useEffect } from "react";

function Dogs() {

    const [displayDogs, setDisplayDogs] = useState([])

    const api = 'https://dog.ceo/api/breeds/image/random'

    useEffect(() => {
        fetch(api)
        .then(res=>res.json())
        .then((dogImages) => setDisplayDogs(dogImages.message))
    }, []);

    return(
        <div>
        {displayDogs.length === 0 ? <p>Loading...</p> 
        : <img src={displayDogs} alt='A Random Dog' />}
        </div>
    )
}

export default Dogs;

