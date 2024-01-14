import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./todoList";


export default function App() {


  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return []
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }]

    })
  }

  function toggleTodo(id, completed) {
    //le pasamos una funcion porque es una lista
    setTodos(currentTodos => {
      //usar retornar en este caso
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }


  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos);
  return <>

    <NewTodoForm onSubmit={addTodo} />

    <h1 className="header">Todo list</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
}