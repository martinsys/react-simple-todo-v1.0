const TodoFilter = ({changeFilterTodo, filterTodo,theme}) => {
    return (
        <div
            className={`d-flex justify-content-center align-items-center footer-controls mt-4 rounded py-2 shadow-lg ${
                theme === "dark" ? "filter-dark" : "filter-light"
            }`}>
            <div>
                <button onClick={() => changeFilterTodo("all")} className={`btn btn-link mx-1 ${filterTodo ==='all' ? 'hover-active' : ''}`} >All</button>
                <button onClick={() => changeFilterTodo("active")} className={`btn btn-link mx-1 ${filterTodo ==='active' ? 'hover-active' : ''}`} >Active</button>
                <button onClick={() => changeFilterTodo("completed")} className={`btn btn-link mx-1 ${filterTodo ==='completed' ? 'hover-active' : ''}`} >Completed</button>
            </div>
        </div>
    )
}
export default TodoFilter