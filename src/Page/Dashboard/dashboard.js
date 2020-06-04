// React:
import React, { useState } from 'react';

// Material UI:
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Components:
import DashboardTable from '../../Components/DashboardTable/DashboardTable';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  // Hook:
  const [uo, setUo] = useState('');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            G-Uni
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>

        <Toolbar />
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
            {['Ampere', 'Apucarana', 'Arapongas',
              'Campo Mourrão', 'Cascavel', 'Cianorte',
              'Dois Vizinhos', 'Foz do Iguaçu',
              'Francisco Beltrão', 'Guarapuava',
              'Irati', 'Londrina', 'Marechal C. Rondon',
              'Palmas', 'Terra Roxa', 'Toledo', 'Umuarama'].map((text, index) => (
                <ListItem button key={text} onClick={event => { setUo(text) }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <DashboardTable uo={uo} />
      </main>
    </div>
  );
}
