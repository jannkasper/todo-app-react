import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


class SingleElement extends Component {

    render() {
        return (
            <ListItem>
                <ListItemIcon>{this.props.icon}</ListItemIcon>
                <ListItemText primary={this.props.name} />
            </ListItem>
        )
    }
}


export default SingleElement
