import React, {Component} from "react";
import {STATUS_TYPE} from "../../constants/StatusTypes";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DialogAddTodo from "../../containers/DialogAddTodoContainer";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';




class Section extends Component {

    state = { openButton: false, openDialog: false, editMode: false,  todoId: '', todoText: ''};

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
                    <ButtonGroup key={index} variant="text" style={{display: "flex", justifyContent: 'flex-end'}}>
                    <Button>{e.text}</Button>
                        <Button onClick={() => this.handleEditDialog(e.id, e.text)}>
                            <EditIcon/>
                        </Button>
                        <Button onClick={() => this.props.deleteTodo(e.id)}>
                            <DeleteIcon/>
                        </Button>
                    </ButtonGroup>
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
