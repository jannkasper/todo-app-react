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




class Header extends Component {

    render() {
        return (
            <AppBar style={{zIndex: 1600}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <HomeOutlinedIcon />
                    </IconButton>

                    <TextField
                        color="white"
                        placeholder='Search...'
                        inputStyle={{color: 'white', padding: '0 25px'}}
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

                    <IconButton edge="end" color="inherit" aria-label="menu">
                        <AddIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}


export default Header
