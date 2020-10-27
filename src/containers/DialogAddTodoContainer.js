import {connect} from 'react-redux'
import DialogAddTodo from "../components/pageComponents/DialogAddTodo";
import {addTodo, updateTodo} from "../actions/projectActions";
import {STATUS_TYPE} from "../constants/StatusTypes";

const mapStateToProps = (state, ownProps) => {
    return({
        projectList: state.projectStore.map(e => {return {id: e.id, title: e.title}}),
        filterList: state.filterStore.map(e => {return {id: e.id, title: e.title}}),
        statusList: Object.keys(STATUS_TYPE).map(key => {return {id: STATUS_TYPE[key].id, title: STATUS_TYPE[key].name}})
    })
};

const mapDispatchToProps = () => dispatch => ({});

export default connect(mapStateToProps, {handleAddTodo: addTodo, handleUpdateTodo: updateTodo})(DialogAddTodo)
