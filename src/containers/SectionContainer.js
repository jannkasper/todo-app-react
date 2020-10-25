import { connect } from 'react-redux';
import Section from "../components/pageComponents/Section";
import {MODE_TYPES} from "../constants/ModeTypes";
import {STATUS_TYPE} from "../constants/StatusTypes";

const mapStateToProps = (state, ownProps) => {
    switch (ownProps.mode) {
        case MODE_TYPES.PROJECT:
            return {todoList: state.todoStore.filter(e => e.projectId === ownProps.id).filter(e => e.status === STATUS_TYPE[ownProps.statusType].id)};
        default:
            return {todoList: state.todoStore.filter(e => e.projectId === 0).filter(e => e.status === STATUS_TYPE[ownProps.statusType].id)};
    }
};

const mapDispatchToProps = () => (dispatch, ownProps) => {
};


export default connect(mapStateToProps, {})(Section)
