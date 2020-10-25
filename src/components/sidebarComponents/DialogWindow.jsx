import React, {Component} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";


class DialogWindow extends Component {

    state = { inputValue: '' };

    updateInputValue = e => {
        this.setState({inputValue: e.target.value})
    };

    handleAdd = () => {
        if (this.state.inputValue) {
            this.props.handleAdd(this.state.inputValue);
            this.props.handleOpen();
        }
    }

    render() {
        return (
            <Dialog  fullWidth={true} maxWidth={'sm'} open={this.props.open} onClose={() => this.props.handleOpen()} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add {this.props.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {this.props.name} name
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        fullWidth
                        onChange={this.updateInputValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.handleOpen()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => this.handleAdd()} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default DialogWindow
