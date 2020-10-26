import { connect } from 'react-redux';
import Page from "../components/Page";
import {MODE_TYPES} from "../constants/ModeTypes";

const mapStateToProps = (state, ownProps) => {
    switch (ownProps.mode) {
        case MODE_TYPES.PROJECT:
            return state.projectStore.find(e => e.id === parseInt(ownProps.id, 10));
        case MODE_TYPES.FILTER:
            return state.filterStore.find(e => e.id === parseInt(ownProps.id, 10));
        case MODE_TYPES.INBOX:
            return {title: 'Inbox'};
        default:
            return state.projectStore.find(e => e.id === 0);


    }
};

const mapDispatchToProps = () => (dispatch, ownProps) => {
};


export default connect(mapStateToProps, {})(Page)
