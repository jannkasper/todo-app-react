import * as types from '../constants/ActionTypes'
import axios from 'axios';

export const addProject = title => ({type: types.ADD_PROJECT, title});

export const addFilter = title => ({type: types.ADD_FILTER, title});

export const addTodo = (projectId, filterId, statusId, text) => ({type: types.ADD_TODO, projectId, filterId, statusId, text});
export const updateTodo = (id, projectId, filterId, statusId, text) => ({type: types.UPDATE_TODO, id, projectId, filterId, statusId, text});
export const deleteTodo = (id) => ({type: types.DELETE_TODO, id});

export const initProject = () => {
    return dispatch => {
        axios.get(`https://jkasper-todo-app-api.herokuapp.com/project/all`)
            .then(res => {
                dispatch(readProjectsSuccess(res.data.projects));
            });
    };
};

export const readProjectsSuccess = projects => ({type: types.READ_PROJECTS, projects});


export const initFilter = () => {
    return dispatch => {
        axios.get(`https://jkasper-todo-app-api.herokuapp.com/filter/all`)
            .then(res => {
                dispatch(readFiltersSuccess(res.data.filters));
            });
    };
};

export const readFiltersSuccess = filters => ({type: types.READ_FILTERS, filters});


export const initTodo = () => {
    return dispatch => {
        axios.get(`https://jkasper-todo-app-api.herokuapp.com/todo/all`)
            .then(res => {
                dispatch(readTodosSuccess(res.data.todos));
            });
    };
};

export const readTodosSuccess = todos => ({type: types.READ_TODOS, todos});
