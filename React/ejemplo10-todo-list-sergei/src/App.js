import {useState} from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () =>  {

  const [formValue, setFormValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = e => {
    e.preventDefault()
    setFormValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList(todoList.concat(formValue))
    setFormValue('')
  }
  return (
    <div className="App">
      <TodoForm formValue={formValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
