import {ADD_PROJECT} from "../constants/ActionTypes";

const initialState = [
    { id:1, title: 'Project 1' },
    { id:2, title: 'Project 2' },
    { id:3, title: 'Project 3' },
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
        default:
            return state
    }
}
