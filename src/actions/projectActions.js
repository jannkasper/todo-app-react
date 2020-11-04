import * as types from '../constants/ActionTypes'
import axios from 'axios';

export const addProject = title => ({type: types.ADD_PROJECT, title});

export const addFilter = title => ({type: types.ADD_FILTER, title});

export const addTodo = (projectId, filterId, statusId, text) => ({type: types.ADD_TODO, projectId, filterId, statusId, text});
export const updateTodo = (id, projectId, filterId, statusId, text) => ({type: types.UPDATE_TODO, id, projectId, filterId, statusId, text});
export const deleteTodo = (id) => ({type: types.DELETE_TODO, id});

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
