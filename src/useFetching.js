import { useState, useEffect } from 'react'

export function useFeching(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)
  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)
    fetch(url, { signal: abortController.signal }) // esto pondria como un rastreador a la peticion para luego poder controlarla
      .then(response => response.json())
      .then(users => setData(users))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Request Cancelled')
        } else {
          setError(err)
        }
      })
      .finally(() => setLoading(false))
    // se ejecuta la funcion cuando se desmonta el componente
    // aborta o cancela la peticion al desmontar el componente
    return () => abortController.abort()
  }, [url])
  const handleCancelRequest = () => {
    if (controller) {
      controller.abort() // ejecuta la funcion
      setError('Request cancelled') // setea un error 
    }
  }
  return { data, loading, error, controller, handleCancelRequest }
}