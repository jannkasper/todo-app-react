import React, {Component} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import SelectInput from "./SelectInput";
import {STATUS_TYPE} from "../../constants/StatusTypes";


class DialogAddTodo extends Component {

    state = { inputValue: ''};

    updateInputValue = e => {
        this.setState({inputValue: e.target.value})
    };

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.text !== this.state.inputValue) {
            this.setState({ inputValue: nextProps.text });
        }
    }

    handleAdd = () => {
        if (this.state.inputValue) {
            this.props.handleAddTodo(
                this.state.projectId || this.props.projectId,
                this.state.filterId || this.props.filterId,
                this.state.statusId || STATUS_TYPE[this.props.status].id,
                this.state.inputValue);
            this.props.handleOpen();
            this.setState({projectId: '', filterId: '', statusId: '', inputValue: ''})
        }
    };

    handleUpdate = () => {
        if (this.state.inputValue) {
            this.props.handleUpdateTodo(
                this.props.id,
                this.state.projectId || this.props.projectId,
                this.state.filterId || this.props.filterId,
                this.state.statusId || STATUS_TYPE[this.props.status].id,
                this.state.inputValue);
            this.props.handleOpen();
            this.setState({projectId: '', filterId: '', statusId: '', inputValue: ''})
        }
    };

    handleChangeSelect = (e, variable) => {
        this.setState({[variable]: +e.target.value});
    };

    render() {
        return (
            <Dialog  fullWidth={true} maxWidth={'sm'} open={this.props.open} onClose={() => this.props.handleOpen()}>
                <DialogTitle>{this.props.editMode ? 'Edit Todo' : 'Add Todo'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Task
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        value={this.state.inputValue}
                        onChange={this.updateInputValue}
                    />

                    <SelectInput
                        title="Project"
                        variable="projectId"
                        handleChange={this.handleChangeSelect.bind(this)}
                        selectedId={this.state.projectId || this.props.projectId}
                        disabled={!this.props.editMode && Boolean(this.props.projectId)}
                        elementList={this.props.projectList}
                    />
                    <SelectInput
                        title="Filter"
                        variable="filterId"
                        handleChange={this.handleChangeSelect.bind(this)}
                        selectedId={this.state.filterId || this.props.filterId}
                        disabled={!this.props.editMode && Boolean(this.props.filterId)}
                        elementList={this.props.filterList}
                    />
                    <SelectInput
                        title="Status"
                        variable="statusId"
                        handleChange={this.handleChangeSelect.bind(this)}
                        selectedId={this.state.statusId || STATUS_TYPE[this.props.status].id}
                        disabled={!this.props.editMode && Boolean(this.props.status)}
                        elementList={this.props.statusList}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.handleOpen()} color="primary">
                        Cancel
                    </Button>
                    {this.props.editMode ?
                    <Button onClick={() => this.handleUpdate()} color="primary">
                        Update
                    </Button>
                        :
                    <Button onClick={() => this.handleAdd()} color="primary">
                        Create
                    </Button> }
                </DialogActions>
            </Dialog>
        )
    }
}

export default DialogAddTodo
