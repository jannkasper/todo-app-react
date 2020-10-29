import { connect } from 'react-redux';
import Section from "../components/pageComponents/Section";
import {MODE_TYPES} from "../constants/ModeTypes";
import {STATUS_TYPE} from "../constants/StatusTypes";
import {addTodo, deleteTodo} from "../actions/projectActions";

const mapStateToProps = (state, ownProps) => {
    switch (ownProps.mode) {
        case MODE_TYPES.PROJECT:
            return {projectId: ownProps.id, todoList: state.todoStore.filter(e => e.projectId === ownProps.id).filter(e => e.statusId === STATUS_TYPE[ownProps.statusType].id)};
        case MODE_TYPES.FILTER:
            return {filterId: ownProps.id, todoList: state.todoStore.filter(e => e.filterId === ownProps.id).filter(e => e.statusId === STATUS_TYPE[ownProps.statusType].id)};
        case MODE_TYPES.INBOX:
            return {todoList: state.todoStore.filter(e => e.projectId === undefined || e.projectId == null).filter(e => e.statusId === STATUS_TYPE[ownProps.statusType].id)};
        default:
            return {todoList: state.todoStore.filter(e => e.projectId === 0).filter(e => e.statusId === STATUS_TYPE[ownProps.statusType].id)};
    }
};

const mapDispatchToProps = () => (dispatch, ownProps) => {
};


export default connect(mapStateToProps, {deleteTodo})(Section)
