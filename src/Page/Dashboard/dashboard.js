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
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

// Icons:
import AccountCircle from '@material-ui/icons/AccountCircle';

// Components:
import DashboardTable from '../../Components/DashboardTable/DashboardTable';

// ApiService:
import api from '../../Services/Api/ApiService';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1
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

  // State:
  const [uo, setUo] = useState('');
  const [osByUo, setOsByUo] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  // Handle do menu de usuario:
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("TOKEN_KEY");
    window.location.reload(false);
  }

  // Handle para buscar as OS's pela UO:
  const handleUo = uo => {
    api.getOsByUo(uo)
      .then(response => {
        setOsByUo(response);
        setUo(uo);
      })
      .catch(error => { console.error(error) })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap className={classes.title}>
            G-Uni
          </Typography>
          <IconButton
            color="inherit"
            aria-label="menu-appbar"
            onClick={handleMenu}
            edge="end"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>

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
              'Campo Mourão', 'Cascavel', 'Cianorte',
              'Dois Vizinhos', 'Foz do Iguaçu',
              'Francisco Beltrão', 'Guarapuava',
              'Irati', 'Londrina', 'Marechal C. Rondon',
              'Palmas', 'Terra Roxa', 'Toledo', 'Umuarama'].map((text, index) => (
                <ListItem button key={text} onClick={() => { handleUo(text) }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <DashboardTable uo={uo} osByUo={osByUo} />
      </main>
    </div>
  );
}
