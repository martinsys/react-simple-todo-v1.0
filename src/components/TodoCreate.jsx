import {useState} from "react";

const TodoCreate = ({createTodo, theme}) => {
    const [title, setTitle] = useState('');

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()){
            return setTitle('')
        }
        createTodo(title);
        setTitle('')
    }

    return (
        <div className="input-container mx-auto">
            <form onSubmit={handleSubmitAddTodo}>
                <input type="text" className={`form-control py-3 ${theme === "dark" ? "input-dark" : "input-light"}`}
                       placeholder="Create a new todo..."
                       aria-label="Create a new todo" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </form>
        </div>
    )
}
export default TodoCreate