import React, {Component} from 'react'
import Section from "../containers/SectionContainer";
import {STATUS_TYPE} from "../constants/StatusTypes";
import Grid from '@material-ui/core/Grid';



class Page extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="stretch">
                {Object.keys(STATUS_TYPE).map((e, index) => <Section key={index} statusType={e} mode={this.props.mode} id={this.props.id} />)}
            </Grid>
            </div>
        )
    }
}


export default Page
