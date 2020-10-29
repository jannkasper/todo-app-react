import React, {Component} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";


class SelectInput extends Component {

    // Check if element is not undefined && not null
    isNotNullNorUndefined = function (o) {
        return (typeof (o) !== 'undefined' && o !== null);
    };

    initialValue = () => {
        if (this.props.displayEmpty) {
            return ""
        }
        const object ={ target: {value: this.props.elementList.find(e => this.isNotNullNorUndefined(e)).id}};
        this.props.handleChange(object, this.props.variable);
    }

    render() {
    return (
        <FormControl style={{minWidth: 120}} disabled={this.props.disabled}>
            <InputLabel>{this.props.title}</InputLabel>
        <Select native
            value={this.props.selectedId || this.initialValue()}
            onChange={e => this.props.handleChange(e, this.props.variable)}>
            {this.props.displayEmpty ? <option aria-label="None" value="" /> : null}
            {this.props.elementList.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
        </Select>
        </FormControl>

)};
}



export default SelectInput
