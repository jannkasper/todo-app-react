import {connect} from 'react-redux'
import DialogAddTodo from "../components/pageComponents/DialogAddTodo";
import {addTodo} from "../actions/projectActions";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = () => dispatch => ({});

export default connect(null, {handleAddTodo: addTodo})(DialogAddTodo)
