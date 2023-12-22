import { useState, useEffect } from 'react'

export function useFeching(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(users => setData(users))

    }, [url])
    return { data }
}