import TodoItem from "./TodoItem.jsx";

const TodoList = ({todos, removeTodo, updateTodo, theme}) => {



    return (
        <ul className="list-group mt-4">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} theme={theme} />
                ))
            }
        </ul>
    )
}
export default TodoList