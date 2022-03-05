import { useEffect, useState } from "react"

function ToDoList() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (!toDo) return
    setToDos(currentArr => [toDo, ...currentArr])
    setToDo("")
  }
  const clear= () => setToDos([])

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your todo..."
          onChange={onChange}
          value={toDo}
        />
        <button>Add To Do</button>
        <button onClick={clear}>Clear</button>
        <hr />
        {toDos.map(t => (
          <li key={t}>{t}</li>
        ))}
      </form>
    </div>
  )

}

export default ToDoList