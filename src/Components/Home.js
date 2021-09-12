import './Home.css';
import { useState } from 'react';

const Home = () => {
    const initialValue = [];
    const [value, setValue] = useState([]);
    const [initial, setInitial] = useState(false);
    var val = '';
    const onChange = (e) => {
        val = e.target.value;
        if (initial == true) {
            e.target.value = "";
            setInitial(false);
        }
    }
    const onClickHandler = (e) => {
        if (val != "") {
            setValue([...value, val]);
            //console.log(e.target.value, "val");
            setInitial(true);
        }
    }
    const onComplete = (e) => {
        //console.log(e.target.innerText);
        const arr = value.filter((item) => item !== e.target.innerText);
        setValue(arr);
    }
    return (
        <div className="todo">
            <h1>Todo-List</h1>
            <input className="inputVal" type="text" onChange={onChange} placeholder="Enter the Task...." /> &nbsp;
            <button className="btn" onClick={onClickHandler}>Add Task</button><br/><br/>
            {value.map((user) => (
                <div className="todo-task" onClick={onComplete} >{user}</div>
            ))}
        </div>
    );
}

export default Home;