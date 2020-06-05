export const ADD_NEW_TASK = 'ADD_NEW_TASK';

const initialState = {
    todoList: [
        {id: 1, title: 'CSS'},
        {id: 2, title: 'JS && React'},
        {id: 3, title: 'HTML'},
    ]
};

export const reduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                todoList: [...state.todoList, action.newTask]
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