import {ADD_TODO} from "../constants/ActionTypes";
import {STATUS_TYPE} from '../constants/StatusTypes'

const initialState = [
    { id:0, projectId: 0, filterId: 0, status: 0, title: 'Todo 1' },
    { id:1, projectId: 0, filterId: 0, status: 1, title: 'Todo 2' },
    { id:2, projectId: 1, filterId: 1, status: 3, title: 'Todo 3' },
];

export default function todoStore(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return  [
                ...state,
                {
                    id: state.reduce((maxId, filter) => Math.max(filter.id, maxId), -1) + 1,
                    projectId: action.projectId,
                    priorityId: action.priorityId,
                    title: action.title
                }
            ]
        }
        default:
            return state;
    }

}
