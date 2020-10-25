import { connect } from 'react-redux';
import CollapeElement from "../components/sidebarComponents/CollapseElement";
import * as actionList from "../actions/projectActions";
import {bindActionCreators} from "redux";

const mapStateToProps = (state, ownProps) => {
    return ({
    elementList: state[ownProps.name + "Store"]
})};

const mapDispatchToProps = () => (dispatch, ownProps) => {
    const addFunction = actionList[`add${ownProps.name[0].toUpperCase() + ownProps.name.slice(1)}`];
    return bindActionCreators({addFunction: addFunction}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(CollapeElement)
