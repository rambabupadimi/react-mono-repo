import styles from './nav-layout.module.scss';



import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet, useNavigate } from 'react-router';
import {useLocation} from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';

import { LightModeOutlined } from '@mui/icons-material';
import { DarkModeOutlined } from '@mui/icons-material';
import { ColorModeContext, tokens } from '../../../theme';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavLayout() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [activeLabel, setActiveLabel]= React.useState('users');

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(ColorModeContext);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateItem = (item:any) => {
    setActiveLabel(item);
    navigate('../dashboard/'+item)
  }

  const onLogout = () => {
    localStorage.clear();
    navigate('../auth/login', { replace: true });
  };

  useEffect(()=>{
    console.log(location.pathname)
    const splArray = location.pathname.split('/');
    const tempActiveLabel = splArray[splArray.length-1];
    setActiveLabel(tempActiveLabel);
  },[])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{backgroundColor: colors.primary[400]}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            React Dashboard
          </Typography>

            <IconButton onClick={colorMode.toggleColorMode} >
              {theme.palette.mode === 'dark' ?  <DarkModeOutlined/> : <LightModeOutlined/>}
               </IconButton>
          
          <Button type="button" style={{position:'absolute', right:'24px',backgroundColor:colors.primary[500], color: colors.primary[100]}} 

          variant="outlined" onClick={onLogout} >Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent"  style={{backgroundColor: colors.primary[400]}}  open={open} >
        <DrawerHeader  style={{backgroundColor: colors.primary[400]}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List  style={{backgroundColor: colors.primary[400]}}>
          {['Users', 'Forms', 'Tables', 'Topics','Tabs','Stepper','Custom-Grid'].map((text, index) => (
            <ListItem 
            key={text} 
            disablePadding sx={{ display: 'block' }} 
            onClick={((e)=>navigateItem(text.toLowerCase()) )}
            className =   {text.toLowerCase() === activeLabel ? styles['label-active'] : ""}          
            // className= {`${text.toLowerCase()=== activeLabel ? "label-active" : ""}`}
            >
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <div style={{backgroundColor: colors.primary[200], height:'100%'}}> */}
        <Outlet/>
        {/* </div> */}
      </Box>
    </Box>
  );
}
