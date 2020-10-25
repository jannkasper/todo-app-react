import * as types from '../constants/ActionTypes'

export const addProject = title => ({type: types.ADD_PROJECT, title});

export const addFilter = title => ({type: types.ADD_FILTER, title});
