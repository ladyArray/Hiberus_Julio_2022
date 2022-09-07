const TodoList = ({todoList}) => {
    return(
        <div>
            <ul>
                {todoList.length > 0 ? todoList.map(item => <li>{item}</li>) : 'Add something here'}
            </ul>
        </div>
    )
}

export default TodoList