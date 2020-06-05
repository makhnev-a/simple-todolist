import React from 'react';
import '../App.css';

const TodoItem = (props) => {
    const deleteTask = () => {
        props.deleteTask(props.taskId);
    };

    const changeStatus = (event) => {
        props.changeStatusTask(props.taskId, event.currentTarget.checked)
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={props.completed}
                onChange={changeStatus}
            />
            <span className={props.completed ? 'taskCompleted' : ''}>
                {props.taskTitle}
            </span>
            <button onClick={deleteTask}>X</button>
        </li>
    );
}

export default TodoItem;