import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";


class SelectInput extends Component {
    render() {
    return (
        <FormControl style={{minWidth: 120}} disabled={this.props.disabled}>
            <InputLabel>{this.props.title}</InputLabel>
        <Select native
            value={this.props.selectedId ? this.props.selectedId : "" }
            onChange={e => this.props.handleChange(e, this.props.variable)}>
            {this.props.elementList.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
        </Select>
        </FormControl>

)};
}



export default SelectInput
