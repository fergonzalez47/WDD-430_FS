import { TodoItem } from "./todoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "not Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} completed={todo.completed} id={todo.id} title={todo.title}
                        toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}