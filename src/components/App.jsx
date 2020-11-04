import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux'
import Box from '@material-ui/core/Box';
import Header from "../containers/HeaderContainer";
import Sidebar from "../containers/SidebarContainer";
import Page from "../containers/PageContainer"
import {MODE_TYPES} from "../constants/ModeTypes";
import {Route, NavLink, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {initAppStore} from "../actions/projectActions";

function App(props) {
    const[open, setOpen] = useState(true);

    useEffect(() => {props.init()}, []);

  return (
      <BrowserRouter>
        <Header handleOpenMenu={() => setOpen(!open)}/>
        <Sidebar open={open}/>
        {/*<Page mode={MODE_TYPES.PROJECT} id={0}/>*/}
          <Box style={{marginLeft: open ? '240px': '0px', paddingLeft: '150px', paddingRight: '150px'}}>
          <Switch>
              <Route path="/project/:id" render={routeProps => <Page id={routeProps.match.params.id} mode={MODE_TYPES.PROJECT}/>}/>
              <Route path="/filter/:id" render={routeProps => <Page id={routeProps.match.params.id} mode={MODE_TYPES.FILTER}/>}/>
              <Route exact path="/" render={routeProps => <Page mode={MODE_TYPES.INBOX}/>}/>
              <Route path="/error" render={() => <h1>Not found</h1>}/>
              <Redirect to="/error"/>
          </Switch>
        </Box>
      </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => {
            dispatch(initAppStore());
        }
    };
};

export default connect(null, mapDispatchToProps)(App);
