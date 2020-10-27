import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NativeSelect from '@material-ui/core/NativeSelect';



class SelectInput extends Component {
    render() {
    return (
        <FormControl style={{minWidth: 120}} disabled={this.props.disabled}>
            <InputLabel>{this.props.title}</InputLabel>
        <NativeSelect
            value={this.props.selectedId ? this.props.selectedId : "" }
            onChange={e => this.props.handleChange(e, this.props.variable)}>
            {this.props.elementList.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
        </NativeSelect>
        </FormControl>

)};
}



export default SelectInput
