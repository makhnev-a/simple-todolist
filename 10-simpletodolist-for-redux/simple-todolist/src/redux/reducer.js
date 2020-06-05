export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK_BY_UD = 'DELETE_TASK_BY_UD';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';

const initialState = {
    todoList: [
        {id: 1, title: 'CSS', complete: true},
        {id: 2, title: 'JS && React', complete: false},
        {id: 3, title: 'HTML', complete: false},
    ]
};

export const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                todoList: [...state.todoList, action.newTask]
            };
        case DELETE_TASK_BY_UD:
            return {
                ...state,
                todoList: [...state.todoList.filter(todo => todo.id !== action.taskId)]
            };
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                todoList: [...state.todoList.map(todo => {
                    if (todo.id === action.taskId) {
                        todo.complete = action.completed
                    }

                    return todo;
                })]
            };
        default:
            return state;
    }
};

export const addNewTaskAc = (newTask) => {
    return {
        type: ADD_NEW_TASK,
        newTask
    };
};

export const deleteTaskByIdAc = (taskId) => {
    return {
        type: DELETE_TASK_BY_UD,
        taskId
    };
};

export const changeTaskStatusAc = (taskId, completed) => {
    return {
        type: CHANGE_TASK_STATUS,
        taskId,
        completed
    }
};