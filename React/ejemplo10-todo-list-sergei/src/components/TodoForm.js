const TodoForm = ({formValue, handleChange, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input value={formValue} onChange={handleChange}/>
        </form>
    )
}

export default TodoForm