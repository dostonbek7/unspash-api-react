import { useState } from "react"
import Title from "./Title"

function App() {
const [todos, setTodos] = useState([
  {id: 1, title: 'cleaning rooms', complited: false},
  {id: 2, title: 'doing homework', complited: true},
  {id: 3, title: 'reading books', complited: false},
])
const deleteItem = (id)=>{
  setTodos((todos)=>{
    return todos.filter((event)=>{
      return event.id !== id
    })
  })
}

let text = 'My todo app !'
  return (
    <>
  <Title text = {text}/>
    <ul>
      {todos.map((todo)=>{
        return <li key={todo.id}>
          <h3 className="title">{todo.title}</h3>
          <button onClick={()=> deleteItem(todo.id)}>Delete</button>
        </li>
      })}
    </ul>
    </>
  )
}

export default App
