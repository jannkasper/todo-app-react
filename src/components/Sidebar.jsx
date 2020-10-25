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
            {name: 'Inbox', icon: <InboxIcon/>},
            {name: 'Today', icon: <TodayIcon/>},
            {name: 'Calendar', icon: <DateRangeIcon/>}
            ];

        const collapseElements = [
            {title: 'Projects', name: 'project'},
            {title: 'Filters', name: 'filter'},
        ];

        return (
            <Drawer
                variant="permanent"
                PaperProps={{ style: { width: 240 } }}>
                <Toolbar/>

                <List>
                    {singleElements.map((e, index) => <SingleElement key={index} name={e.name} icon={e.icon} />)}
                </List>

                <Divider />

                {collapseElements.map((e, index) => <CollapseElement key={index} name={e.name} title={e.title}/>)}

            </Drawer>
        )
    }
}

export default Sidebar
