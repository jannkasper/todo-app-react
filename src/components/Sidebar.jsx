import React, {Component} from "react";
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';

import SingleElement from "./sidebarComponents/SingleElement";
import CollapseElement from "../containers/CollapseElementContainer";


class Sidebar extends Component {

    render() {
        const singleElements = [
            {name: 'Inbox', icon: <InboxIcon/>, url :'/'},
            {name: 'Today', icon: <TodayIcon/>, url :'today'},
            {name: 'Calendar', icon: <DateRangeIcon/>, url :'/calendar'}
            ];

        const collapseElements = [
            {title: 'Projects', name: 'project'},
            {title: 'Filters', name: 'filter'},
        ];

        return (
            <Drawer
                open={this.props.open}
                variant="persistent"
                PaperProps={{ style: { width: 240 } }}>
                <Toolbar/>

                <List>
                    {singleElements.map((e, index) => <SingleElement key={index} name={e.name} icon={e.icon} url={e.url}/>)}
                </List>

                <Divider />

                {collapseElements.map((e, index) => <CollapseElement key={index} name={e.name} title={e.title}/>)}

            </Drawer>
        )
    }
}

export default Sidebar
