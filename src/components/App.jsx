import React from 'react';
import Header from "../containers/HeaderContainer";
import Grid from '@material-ui/core/Grid';
import Sidebar from "./Sidebar";

function App() {
  return (
      <Grid>
        <Header/>
        <Sidebar/>
      </Grid>
  );
}

export default App;
