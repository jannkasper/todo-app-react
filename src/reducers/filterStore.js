import {ADD_FILTER, READ_FILTERS} from "../constants/ActionTypes";

const initialState = [
    // { id:1, title: 'High' },
    // { id:2, title: 'Medium' },
    // { id:3, title: 'Low' }
];


export default function filterStore(state = initialState, action) {
    switch(action.type) {
        case ADD_FILTER: {
            return  [
                ...state,
                {
                    id: state.reduce((maxId, filter) => Math.max(filter.id, maxId), -1) + 1,
                    title: action.title
                }
            ]
        }
        case READ_FILTERS:
            return action.items;
        default:
            return state
    }
}
