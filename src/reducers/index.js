import { combineReducers} from "redux";
import projectStore from "./projectStore";
import filterStore from "./filterStore";


export default combineReducers({projectStore, filterStore})
