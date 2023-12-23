import { useDispatch, useSelector } from 'react-redux'
import './TodoList.scss'
import { deleteToDo, updateTheToDo } from '../../redux/todoReducer';

const TodoList = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleChange = (title) => {
    dispatch(updateTheToDo(title))
  }
  return (
    <div className='TodoLists'>
      {todos?.map((todo, index) => (
        <div className="todolist" key={index} >
          <div className="todotext">
            <label className="container">
              <input type="checkbox" checked={todo.compleated} onChange={(e) => handleChange(todo.title)} />
              <div className="checkmark"></div>
            </label>
            <h2 style={{textDecoration: todo.compleated ? "line-through" : "AppWorkspace", color: todo.compleated ? "green" : "white"}}>{todo.title}</h2>
          </div>
          <div className="todobuttons">
            <i className="fa-solid fa-trash-can" style={{color : todo.compleated? "green": "white"}} onClick={() => dispatch(deleteToDo(todo))}></i>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList