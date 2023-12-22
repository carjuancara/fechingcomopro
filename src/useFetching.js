import { useState, useEffect } from 'react'

export function useFeching(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(users => setData(users))
            .finally(() => setLoading(false))

    }, [url])
    return { data, loading }
}