import {ADD_PROJECT, READ_PROJECTS} from "../constants/ActionTypes";

const initialState = [
    // { id:1, title: 'HOME' },
    // { id:2, title: 'SCHOOL' },
    // { id:3, title: 'WORK' }
];


export default function projectStore(state = initialState, action) {
    switch(action.type) {
        case ADD_PROJECT: {
            return  [
                ...state,
                {
                    id: state.reduce((maxId, project) => Math.max(project.id, maxId), -1) + 1,
                    title: action.title
                }
            ]
        }
        case READ_PROJECTS:
            return action.items;
        default:
            return state
    }
}
