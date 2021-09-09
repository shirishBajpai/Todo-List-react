import './Home.css';
import { useState } from 'react';

const Home = () => {
    const [value, setValue] = useState('');
    var val = '';
    const onChange = (e) => {
        val = e.target.value;
        console.log(val);
    }
    const onClickHandler = () => {
        setValue(val);
    }
    return(
        <div className="todo">
            <h1>Todo-List</h1>
            <input className="inputVal" type="text" onChange={onChange} placeholder="Enter the Task...." /> &nbsp;
            <button className="btn" onClick={onClickHandler}>Add Task</button>
            <p className="todo-task">{value}</p>
        </div>
    );
}

export default Home;