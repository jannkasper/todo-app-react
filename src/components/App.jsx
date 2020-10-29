import React, {useRef, useState} from 'react';
import Box from '@material-ui/core/Box';
import Header from "../containers/HeaderContainer";
import Sidebar from "../containers/SidebarContainer";
import Page from "../containers/PageContainer"
import {MODE_TYPES} from "../constants/ModeTypes";
import {Route, NavLink, Switch, Redirect, BrowserRouter} from 'react-router-dom';

function App() {
    const[open, setOpen] = useState(true);

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

export default App;
