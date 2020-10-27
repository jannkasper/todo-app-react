import React, {Component} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import AddIcon from "@material-ui/icons/Add";
import DialogWindow from './DialogWindow';
import { NavLink} from 'react-router-dom';
import Divider from "@material-ui/core/Divider";



class CollapseElement extends Component {

    state = { open: false, openDialog: false };

    handleOpen = () => {
        const open = this.state.open;
        this.setState({open: !open})
    };

    handleOpenDialog = () => {
        const openDialog = this.state.openDialog;
        this.setState({openDialog: !openDialog})
    };

    render() {
        return (
            <div>
                <ListItem button onClick={this.handleOpen}>
                    <ListItemIcon>
                        {this.state.open ? <ExpandMore /> : <ChevronRightIcon />}
                    </ListItemIcon>
                    <ListItemText primary={this.props.title} />
                </ListItem>

                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="nav" disablePadding>
                        { this.props.elementList.map(e => { return (
                            <NavLink key={e.id} to={"/" + this.props.name + "/" + e.id} style={{textDecoration:'none'}}>
                                <ListItem button>
                                    {/*<ListItemIcon>*/}
                                    {/*    <FiberManualRecordIcon fontSize={"small"}/>*/}
                                    {/*</ListItemIcon>*/}
                                    <ListItemText inset primary={e.title} />
                                </ListItem>
                            </NavLink>
                        )})}
                    </List>

                    <ListItem button onClick={this.handleOpenDialog}>
                        <ListItemIcon>
                            <AddIcon fontSize={"small"}/>
                        </ListItemIcon>
                        <ListItemText primary={`Add ${this.props.name}`} />
                    </ListItem>
                </Collapse>

                <Divider />

                <DialogWindow
                    name={this.props.name}
                    open={this.state.openDialog}
                    handleOpen={this.handleOpenDialog.bind(this)}
                    handleAdd={this.props.addFunction}
                />
            </div>


        )
    }
}


export default CollapseElement
