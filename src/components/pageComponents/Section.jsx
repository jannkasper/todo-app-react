import React, {Component} from "react";
import {STATUS_TYPE} from "../../constants/StatusTypes";

class Section extends Component {
    render() {
        return (
        <div>
            <h3>{STATUS_TYPE[this.props.statusType].name}</h3>
            {this.props.todoList.map((e, index) => <p key={index}>{e.title}</p>)}
        </div>
        )
    }
}

export default Section
