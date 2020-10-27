import * as types from '../constants/ActionTypes'

export const addProject = title => ({type: types.ADD_PROJECT, title});

export const addFilter = title => ({type: types.ADD_FILTER, title});

export const addTodo = (projectId, filterId, statusId, text) => ({type: types.ADD_TODO, projectId, filterId, statusId, text});
export const updateTodo = (id, projectId, filterId, statusId, text) => ({type: types.UPDATE_TODO, id, projectId, filterId, statusId, text});
