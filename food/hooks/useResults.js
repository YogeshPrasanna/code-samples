import { useState, useEffect } from 'react'
import zomato from '../api/zomato'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get(`/search`, {
                params: {
                    count: 50,
                    entity_id: 4,
                    entity_type: 'city',
                    q: searchTerm
                }
            });
            setResults(response.data.restaurants)
            // console.log('hey', resutls)
            setErrorMessage('')
        } catch (err) {
            setErrorMessage('something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];
}
