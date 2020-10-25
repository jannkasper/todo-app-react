import React, {useRef, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Header from "../containers/HeaderContainer";
import Sidebar from "../containers/SidebarContainer";
import Page from "../containers/PageContainer"
import {MODE_TYPES} from "../constants/ModeTypes";

function App() {
    const[open, setOpen] = useState(true);

  return (
      <Grid>
        <Header handleOpenMenu={() => setOpen(!open)}/>
        <Sidebar open={open}/>
        <Page mode={MODE_TYPES.PROJECT} id={0}/>
      </Grid>
  );
}

export default App;
