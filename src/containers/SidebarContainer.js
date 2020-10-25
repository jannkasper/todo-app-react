import { connect } from 'react-redux';
import Sidebar from "../components/Sidebar";
import {addProject} from "../actions/projectActions";

const mapStateToProps = state => { return ({
    projectList: state.projectStore
})};

const mapDispatchToProps = () => dispatch => ({});


export default connect(mapStateToProps, {addProject})(Sidebar)
