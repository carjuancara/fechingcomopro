
import './App.css'
import { useFeching } from './useFetching'

function App() {
  const { data } = useFeching('https://jsonplaceholder.typicode.com/users')  
  return (
    <div className='App'>
      <h1>Feching como Pro</h1>
      <div className='card'>
      <ul>
        {data?.map( user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default App
