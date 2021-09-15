import './Home.css';
import { useState } from 'react';

const Home = () => {
    const [todo, setTodo] = useState([]);
    const [change, setChange] = useState('');
    const onChange = (e) => {
        const val = e.target.value;
        setChange(val);
    }

    const taskLeft = () => {
        return todo.length;
    }

    const addTask = (e) => {
        if (change !== "") {
            const timestamp = Date.now();
            setTodo([...todo, { name: change, id: timestamp }]);
            console.log("dd");
            setChange('');
        }
    }

    const onComplete = (e) => {
        const arr = todo.filter((item) => item.id != e.target.id);
        setTodo(arr);
    }

    const cancelTasks = () => {
        setTodo([]);
    }

    return (
        <div className="todo">
            <h1>Todo-List</h1>
            <input className="todo_input" type="text" onChange={onChange} value={change} placeholder="Enter your task...."/> &nbsp;
            <button className="todo_btn_addTask" onClick={addTask}>Add Task</button><br /><br />
            {todo.map((user) => (
                <div className="todo_task" onClick={onComplete} key={user.id} id={user.id}>{user.name}</div>
            ))}
            <br />
            Task left :-<span> {taskLeft()}</span>
            <button className="todo_btn_cancelTasks" onClick={cancelTasks}>Cancel All Tasks</button><br /><br />
        </div>
    );
}

export default Home;