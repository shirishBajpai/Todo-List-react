import './Home.css';
import { useState } from 'react';

const Home = () => {
    const [values, setValues] = useState([]);
    //const [initial, setInitial] = useState(false);
    const [change, setChange] = useState('');
    const onChange = (e) => {
        const val = e.target.value;
        //if (initial) {
         //  e.target.value = "";
         //  setInitial(false);
//}
        setChange(val);
        console.log(val);
    }

    const taskLeft = () => {
        return values.length;
    }

    const onClickHandler = (e) => {
        if (change !== "") {
            const timestamp = Date.now();
            setValues([...values, { name: change, id: timestamp }]);
            //setInitial(true);
            console.log("dd");
            setChange('');
        }
    }

    const onComplete = (e) => {
        const arr = values.filter((item) => item.id != e.target.id);
        setValues(arr);
    }

    const cancelTasks = () => {
        setValues([]);
    }

    return (
        <div className="todo">
            <h1>Todo-List</h1>
            <input className="todo_input" type="text" onChange={onChange} value={change} /> &nbsp;
            <button className="todo_btn_addTask" onClick={onClickHandler}>Add Task</button><br /><br />
            {values.map((user) => (
                <div className="todo_task" onClick={onComplete} key={user.id} id={user.id}>{user.name}</div>
            ))}
            <br />
            Task left :-<span> {taskLeft()}</span>
            <button className="todo_btn_cancelTasks" onClick={cancelTasks}>Cancel All Tasks</button><br /><br />
        </div>
    );
}

export default Home;