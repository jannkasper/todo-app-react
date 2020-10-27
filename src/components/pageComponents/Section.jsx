import React, {Component} from "react";
import {STATUS_TYPE} from "../../constants/StatusTypes";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DialogWindow from "../sidebarComponents/DialogWindow";
import DialogAddTodo from "../../containers/DialogAddTodoContainer";

class Section extends Component {

    state = { openDialog: false, editMode: false,  todoId: '', todoText: ''};

    handleOpenDialog = () => {
        this.setState({editMode: false, todoId: '', todoText: ''});

        const openDialog = this.state.openDialog;
        this.setState({openDialog: !openDialog})
    };

    handleEditDialog = (id, text) => {
        this.setState({editMode: true, todoId: id, todoText: text});

        const openDialog = this.state.openDialog;
        this.setState({openDialog: !openDialog})
    }


    render() {
        return (
        <div>
            <h3>{STATUS_TYPE[this.props.statusType].name}</h3>
            {this.props.todoList.map((e, index) =>
                <Button key={index} variant="outlined" style={{display: "flex"}} onClick={() => this.handleEditDialog(e.id, e.text)}>{e.text}</Button>
                // <p key={index}>{e.text}</p>
            )}
            <Button
                color="primary"
                startIcon={<AddIcon fontSize="large" />}
                onClick={() => this.handleOpenDialog()}>
                Add task
            </Button>

            <DialogAddTodo
                id={this.state.todoId}
                text={this.state.todoText}
                editMode={this.state.editMode}
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
