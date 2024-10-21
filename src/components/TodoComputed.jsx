const TodoComputed = ({computedItemsLeft,clearCompleted, theme}) => {
    return (
        <div
            className={`d-flex justify-content-between align-items-center footer-controls rounded-bottom py-2 px-3 shadow-lg ${
                theme === "dark" ? "computed-dark" : "computed-light"
            }`}>
            <span>{computedItemsLeft} items left</span>
            <button onClick={clearCompleted} className="btn btn-link">Clear Completed</button>
        </div>
    )
}
export default TodoComputed