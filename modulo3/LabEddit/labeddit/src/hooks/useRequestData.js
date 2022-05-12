import axios from 'axios';
import { useEffect, useState } from 'react';

const useRequestData = (initialData, url) => {

    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                alert("Ocorreu um erro por favor, tente novamente",err.response)
            })
    }, [url])
    return (data)
}

export default useRequestData