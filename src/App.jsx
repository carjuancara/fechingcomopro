
import './App.css'
import { useFeching } from './useFetching'

function App() {
  const { data, loading, error } = useFeching('https://jsonplaceholder.typicode.com/users')  
  return (
    <div className='App'>
      <h1>Feching como Pro</h1>
      <div className='card'>
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>loading ...</li>}
        {data?.map( user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default App
