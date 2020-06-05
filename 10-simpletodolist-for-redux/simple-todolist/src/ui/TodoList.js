import React from 'react';
import {connect} from 'react-redux';
import {addNewTaskAc, deleteTaskByIdAc} from "../redux/reducer";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            currentTaskId: null
        };
    }

    taskTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    addNewTask = () => {
        let newTask = {
            id: this.props.todoList.length + 1,
            title: this.state.title
        };

        this.setState({
            title: ''
        });

        this.props.addNewTask(newTask);
    };

    deleteTask = (taskId) => {
        this.props.deleteTask(taskId);
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <input value={this.state.title} onChange={this.taskTitleChange}/>
                    <button onClick={this.addNewTask}>+</button>
                </div>
                <ul>
                    {
                        this.props.todoList.map(todo => {
                            return <TodoItem taskTitle={todo.title} taskId={todo.id} deleteTask={this.deleteTask}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask(newTask) {
            dispatch(addNewTaskAc(newTask));
        },
        deleteTask(taskId) {
            dispatch(deleteTaskByIdAc(taskId));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);