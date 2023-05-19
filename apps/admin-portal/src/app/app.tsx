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
        
        <Route path='users' element={<RequireAuth><User /></RequireAuth>}></Route>
        <Route path='user-details/:id' element={<RequireAuth><UserDetails/></RequireAuth>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
