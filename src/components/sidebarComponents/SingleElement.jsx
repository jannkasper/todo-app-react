import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";


class SingleElement extends Component {

    render() {
        return (
            <NavLink to={this.props.url} style={{textDecoration:'none'}}>
                <ListItem>
                    <ListItemIcon>{this.props.icon}</ListItemIcon>
                    <ListItemText primary={this.props.name} />
                </ListItem>
            </NavLink>
        )
    }
}


export default SingleElement
