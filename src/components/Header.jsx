import React, {Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";
import DialogAddTodo from "../containers/DialogAddTodoContainer";
import {STATUS_TYPE} from "../constants/StatusTypes";




class Header extends Component {

    state = { openDialog: false };

    handleOpenDialog = () => {
        const openDialog = this.state.openDialog;
        this.setState({openDialog: !openDialog})
    };

    render() {
        return (
            <AppBar style={{zIndex: 1600}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => this.props.handleOpenMenu()}>
                        <MenuIcon />
                    </IconButton>

                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <HomeOutlinedIcon />
                        </IconButton>
                    </Link>


                    <TextField
                        // color="white"
                        placeholder='Search...'
                        // inputStyle={{color: 'white', padding: '0 25px'}}
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 5 }}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <IconButton onClick={() => this.handleOpenDialog()} edge="end" color="inherit" aria-label="menu">
                        <AddIcon />
                    </IconButton>
                </Toolbar>

                <DialogAddTodo
                    open={this.state.openDialog}
                    handleOpen={this.handleOpenDialog.bind(this)}
                />
            </AppBar>
        )
    }
}


export default Header
