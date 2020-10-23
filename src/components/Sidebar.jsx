import React, {Component} from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';



class Sidebar extends Component {

    state = { openProjects: false, openFilters: false };

    handleOpenProjects = () => {
        const openProjects = this.state.openProjects;
        this.setState({openProjects: !openProjects})
    };

    handleOpenFilters = () => {
        const openFilters = this.state.openFilters;
        this.setState({openFilters: !openFilters})
    };

    render() {
        return (
            <Drawer
                variant="permanent"
            >
                <Toolbar />
                <div style={{overflow: "auto"}}>
                    <List>
                        <ListItem>
                            <ListItemIcon> <InboxIcon /></ListItemIcon>
                            <ListItemText primary={'Inbox'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <TodayIcon /></ListItemIcon>
                            <ListItemText primary={'Today'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon> <DateRangeIcon /></ListItemIcon>
                            <ListItemText primary={'Calendar'} />
                        </ListItem>
                    </List>

                    <Divider />

                    <ListItem button onClick={this.handleOpenProjects}>
                        <ListItemIcon>
                            {this.state.openProjects ? <ExpandMore /> : <ChevronRightIcon />}
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItem>

                    <Collapse in={this.state.openProjects} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Demo" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <Divider />

                    <ListItem button onClick={this.handleOpenFilters}>
                        <ListItemIcon>
                            {this.state.openFilters ? <ExpandMore /> : <ChevronRightIcon />}
                        </ListItemIcon>
                        <ListItemText primary="Filters" />
                    </ListItem>

                    <Collapse in={this.state.openFilters} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Demo" />
                            </ListItem>
                        </List>
                    </Collapse>
                </div>
            </Drawer>
        )
    }
}

export default Sidebar
