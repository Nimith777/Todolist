import { useState } from 'react'
import './App.css'
import TodoList from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        
        <TodoList />
      </div>
      <div>
       
      </div>
    </>
  )
}

export default App
