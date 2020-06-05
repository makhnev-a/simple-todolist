import React from 'react';

const TodoItem = (props) => {
    const deleteTask = () => {
        props.deleteTask(props.taskId);
    };

    return (
        <li key={props.taskId}>
            <input type="checkbox"/> {props.taskTitle}
            <button onClick={deleteTask}>X</button>
        </li>
    );
}

export default TodoItem;