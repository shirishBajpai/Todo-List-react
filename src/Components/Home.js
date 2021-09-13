import './Home.css';
import { useState } from 'react';

const Home = () => {
    const [values, setValues] = useState([]);
    const [initial, setInitial] = useState(false);
    var val = '';
    const onChange = (e) => {
        val = e.target.value;
        if (initial) {
            e.target.value = "";
            setInitial(false);
        }
    }
    const onClickHandler = (e) => {
        if (val !== "") {
            setValues([...values, val]);
            //console.log(e.target.value, "val");
            setInitial(true);
        }
    }
    const onComplete = (e) => {
        console.log("f");
        //console.log(e.target.innerText);
        const arr = values.filter((item) => item !== e.target.innerText);
        setValues(arr);
    }
    return (
        <div className="todo">
            <h1>Todo-List</h1>
            <input className="inputVal" type="text" onChange={onChange} placeholder="Enter the Task...." /> &nbsp;
            <button className="btn" onClick={onClickHandler}>Add Task</button><br/><br/>
            {values.map((user) => (
                <div className="todo-task" onClick={onComplete} >{user}</div>
            ))}
        </div>
    );
}

export default Home;