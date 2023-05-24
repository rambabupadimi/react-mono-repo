// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Auth } from '@monorepo-demo/auth';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from 'libs/auth/src/lib/login/login';
import User from './users/user/user';
import { RequireAuth } from './helpers/required-auth';
import { RequireDashboard } from './helpers/required-dashboard';
import UserDetails from './users/user-details/user-details';
import { createTheme, ThemeProvider } from '@mui/material';
import NavLayout from './layouts/nav-layout/nav-layout';
import Forms from './forms/forms';
import Tables from './tables/tables';
import Topics from './topics/topics';


export const purple = {
  50: "#e9eaf0",
  100: "#c7cada",
  200: "#a3a8c1",
  300: "#8186a7",
  400: "#686c95",
  500: "#505485",
  600: "#494c7d",
  700: "#414371",
  800: "#393964",
  900: "#2d2a4c"
};

const theme = createTheme({

  palette:{
    primary:{
      main: '#683b3b'
    },
    secondary: {
      main: "#494c7d"
    }
  }
});


export function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <NxWelcome title="admin-portal" /> */}

      <Routes>
        <Route path='' element={<Navigate to="auth" />} ></Route>
        <Route path='auth' element={<Auth />}>
          <Route path='' element={<Navigate to="login" />} ></Route>
          <Route path='login' element={<RequireDashboard><Login /></RequireDashboard>}></Route>
        </Route>
        
        <Route path='dashboard' element={<RequireAuth><NavLayout></NavLayout></RequireAuth>}>
          <Route path='' element={<Navigate to="users" />} ></Route>
          <Route path='users' element={<User />}></Route>
          <Route path='forms' element={<Forms />}></Route>
          <Route path='tables' element={<Tables />}></Route>
          <Route path='topics' element={<Topics />}></Route>

          <Route path='user-details/:id' element={<UserDetails/>}></Route>
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
