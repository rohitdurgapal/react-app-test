import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos").then((res) => res.json()).then((res) => setTodos(res.todos))
  }, [])

  return (
    <>
      <h1>React testing library using Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br /><br />
        {todos.length && <div>Todo List : {todos.length} </div>}
      </div>
    </>
  )
}

export default App
