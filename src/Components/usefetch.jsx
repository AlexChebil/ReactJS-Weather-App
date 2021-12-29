import React, { useEffect, useState } from 'react'

function Usefetch(url) {

    const [apiData, setApiData] = useState([{}]);
    const fetchRequirements= { 
        method: 'GET',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    useEffect(() => {
        fetch(url)
        .then((response)=>response.text())
        .then((data)=>setApiData(data))
        //.catch((error)=>console.log(error));
    }, [url])
    










    return {apiData}
}

export default Usefetch
