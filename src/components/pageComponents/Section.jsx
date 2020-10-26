import React, {Component} from "react";
import {STATUS_TYPE} from "../../constants/StatusTypes";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DialogWindow from "../sidebarComponents/DialogWindow";
import DialogAddTodo from "../../containers/DialogAddTodoContainer";

class Section extends Component {

    state = { openDialog: false };

    handleOpenDialog = () => {
        const openDialog = this.state.openDialog;
        this.setState({openDialog: !openDialog})
    };


    render() {
        return (
        <div>
            <h3>{STATUS_TYPE[this.props.statusType].name}</h3>
            {this.props.todoList.map((e, index) => <p key={index}>{e.text}</p>)}
            <Button
                color="primary"
                startIcon={<AddIcon fontSize="large" />}
                onClick={() => this.handleOpenDialog()}>
                Add task
            </Button>

            <DialogAddTodo
                projectId={this.props.projectId}
                filterId={this.props.filterId}
                status={this.props.statusType}
                open={this.state.openDialog}
                handleOpen={this.handleOpenDialog.bind(this)}
            />
        </div>
        )
    }
}

export default Section
