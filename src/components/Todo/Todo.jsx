import './Todo.scss';
import TodoForm from '../TodoFrom/TodoForm'
import TodoList from '../TodoList/TodoList'
import { useDispatch } from 'react-redux';
import { resetToDo } from '../../redux/todoReducer';

const Todo = () => {
    const dispatch = useDispatch();
    return (
        <div className='Todo'>
            {/* <div className="navbar"> */}
                <div className="navbarleft">
                    TODO <span> ER</span>
                </div>
                <div className="navbarright">
                    <button onClick={()=> dispatch(resetToDo())}>Reset</button>
                {/* </div> */}
            </div>
            <div className="todolists">
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}

export default Todo