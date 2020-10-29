import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from "../constants/ActionTypes";
import {STATUS_TYPE} from '../constants/StatusTypes'

const initialState = [
    { id:1, projectId: 1, filterId: 1, statusId: 1, text: 'PLAN HOLIDAYS' },
    { id:2, projectId: 1, filterId: 1, statusId: 2, text: 'GROCERIES' },
    { id:3, projectId: 2, filterId: 2, statusId: 4, text: 'MATH EXERCISES' },
    { id:4, projectId: null, filterId: 2, statusId: 3, text: 'MAC&CHEESE' },
    { id:5, projectId: null, filterId: 3, statusId: 3, text: 'PLAN A HOLIDAYS' },
];

export default function todoStore(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return  [
                ...state,
                {
                    id: state.reduce((maxId, filter) => Math.max(filter.id, maxId), -1) + 1,
                    projectId: action.projectId,
                    filterId: action.filterId,
                    statusId: action.statusId,
                    text: action.text
                }
            ]
        }
        case UPDATE_TODO: {
            return state.map(item => {return item.id === action.id ?
                {...item, projectId: action.projectId, filterId: action.filterId, statusId: action.statusId, text: action.text} : item});
        }
        case DELETE_TODO: {
            return state.filter(item => item.id !== action.id);
        }
        default:
            return state;
    }

}
