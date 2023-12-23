import { useEffect, useState } from 'react';
import './TodoForm.scss';
import { addToDo } from '../../redux/todoReducer';
import { useDispatch, useSelector } from 'react-redux';



const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const [done, setDone] = useState(todos.filter((todo) => todo.compleated === true));


  useEffect(() => {
    setDone(todos.filter((todo) => todo.compleated === true))
  }, [todos]);




  const handleClick = () => {
    if (todoTitle.length <= 1 || todoTitle.length >= 50) {
      return;
    }
    dispatch(addToDo({ title: todoTitle, compleated: false }));
    setTodoTitle("");
  }

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  }


  return (
    <div className='TodoForm'>
      <div className="taskdetail">
        <div className="taskdetailtext">
          <h2>Todo Done</h2>
          <h3>Keet it up</h3>

        </div>
        <div className="taskdetailcount">
          <h4>{done.length}/{todos.length} </h4>
        </div>
      </div>

      <div className="form">
        <input type="text" placeholder='Write your next task...'
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <button onClick={handleClick}>+</button>
      </div>

    </div>

  )
}

export default TodoForm