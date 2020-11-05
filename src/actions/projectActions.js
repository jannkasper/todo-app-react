import * as types from '../constants/ActionTypes'
import axios from 'axios';

// export const addProject = title => ({type: types.ADD_PROJECT, title});
export const addProject = title => {
    return dispatch => {
        axios({
            method: 'post',
            url: 'https://jkasper-todo-app-api.herokuapp.com/project/add',
            data: {title: title}
        })
            .then(res => {
                dispatch(readItemsSuccess(types.READ_PROJECTS, res.data.projects));
            });
    };
};


export const addFilter = title => {
    return dispatch => {
        axios({
            method: 'post',
            url: 'https://jkasper-todo-app-api.herokuapp.com/filter/add',
            data: {title: title}
        })
            .then(res => {
                dispatch(readItemsSuccess(types.READ_FILTERS, res.data.filters));
            });
    };
};

export const addTodo = (projectId, filterId, statusId, text) => {
    return dispatch => {
        axios({
            method: 'post',
            url: 'https://jkasper-todo-app-api.herokuapp.com/todo/add',
            data: {projectId: projectId, filterId: filterId, statusId: statusId, text: text}
        })
            .then(res => {
                dispatch(readItemsSuccess(types.READ_TODOS, res.data.todos));
            });
    };
};

export const updateTodo = (id, projectId, filterId, statusId, text) => {
    return dispatch => {
        axios({
            method: 'post',
            url: `https://jkasper-todo-app-api.herokuapp.com/todo/${id}/update`,
            data: {projectId: projectId, filterId: filterId, statusId: statusId, text: text}
        })
            .then(res => {
                debugger;
                dispatch(readItemsSuccess(types.READ_TODOS, res.data.todos));
            });
    };
};

export const deleteTodo = (id) => {
    return dispatch => {
        axios.post(`https://jkasper-todo-app-api.herokuapp.com/todo/${id}/delete`)
            .then(res => {
                dispatch(readItemsSuccess(types.READ_TODOS, res.data.todos));
            });
    };
};

export const readItemsSuccess = (type, items) => ({type, items});

export const initAppStore = () => {
    return dispatch => {
        axios.get(`https://jkasper-todo-app-api.herokuapp.com/project/all`)
            .then(res => {
                dispatch(readItemsSuccess(types.READ_PROJECTS, res.data.projects));
            });
        axios.get(`https://jkasper-todo-app-api.herokuapp.com/filter/all`)
            .then(res => {
                dispatch(readItemsSuccess(types.READ_FILTERS, res.data.filters));
            });
        axios.get(`https://jkasper-todo-app-api.herokuapp.com/todo/all`)
            .then(res => {
                dispatch(readItemsSuccess(types.READ_TODOS, res.data.todos));
            });
    };
};
