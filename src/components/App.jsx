import React, {useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Header from "../containers/HeaderContainer";
import Sidebar from "../containers/SidebarContainer";
import Page from "../containers/PageContainer"
import {MODE_TYPES} from "../constants/ModeTypes";
import {Route, NavLink, Switch, BrowserRouter} from 'react-router-dom';

function App() {
    const[open, setOpen] = useState(true);

  return (
      <BrowserRouter>
        <Header handleOpenMenu={() => setOpen(!open)}/>
        <Sidebar open={open}/>
        {/*<Page mode={MODE_TYPES.PROJECT} id={0}/>*/}
          <Switch>
              <Route path="/project/:id" render={routeProps => <Page id={routeProps.match.params.id} mode={MODE_TYPES.PROJECT}/>}/>
              <Route path="/filter/:id" render={routeProps => <Page id={routeProps.match.params.id} mode={MODE_TYPES.FILTER}/>}/>
              <Route render={() => <h1>Not found</h1>}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
