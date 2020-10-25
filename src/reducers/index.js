import { combineReducers} from "redux";
import projectStore from "./projectStore";
import filterStore from "./filterStore";
import todoStore from "./todoStore";


export default combineReducers({projectStore, filterStore, todoStore})
