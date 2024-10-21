import crossIcon from "../assets/images/icon-cross.svg";

const TodoItem = ({todo, removeTodo, updateTodo, theme}) => {
    return (
        <li className={`list-group-item d-flex align-items-center justify-content-between  ${
            theme === "dark" ? "li-dark" : "li-light"
        }`}>
            <div>
                <input className="form-check-input me-2" type="checkbox" value="" checked={todo.completed}
                       onChange={() => updateTodo(todo.id)}/>
                <span
                    className={`
                        ${todo.completed ? (theme === "dark" ? "text-decoration-line-through completed-dark" : "text-decoration-line-through text-black-50 opacity-50") : ''}
                    `}
                >
                    {todo.title}
                </span>
            </div>
            <button onClick={() => removeTodo(todo.id)} className="btn btn-link">
                <img src={crossIcon} alt="delete" className="icon-cross"/>
            </button>
        </li>
    )
}
export default TodoItem