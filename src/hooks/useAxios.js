import React from 'react'
import axios from 'axios'

import useLocalStorage from './useLocalStorage'



const useAxios = (key, url) => {
    const [response, setResponse] = useLocalStorage(key)
    const addResponseData = async (formatter = data => data, urlEnd = "") => {
        const response = await axios.get(`${url}${urlEnd}`)
        setResponse(data => [...data, formatter(response.data)])
    };

    const clearResponses = () => setResponse([])

    return [response, addResponseData, clearResponses]
}

export default useAxios