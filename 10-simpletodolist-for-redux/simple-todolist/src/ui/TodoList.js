import React from 'react';
import {connect} from 'react-redux';
import {addNewTaskAc} from "../redux/reducer";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
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
                            return <li key={todo.id}>
                                <input type="checkbox"/> {todo.title}
                                <button>X</button>
                            </li>
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
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);