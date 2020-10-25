import React from 'react';
import Header from "../containers/HeaderContainer";
import Grid from '@material-ui/core/Grid';
import Sidebar from "../containers/SidebarContainer";
import PageContent from "./PageContent"

function App() {
  return (
      <Grid>
        <Header/>
        <Sidebar/>
        <PageContent/>
      </Grid>
  );
}

export default App;
