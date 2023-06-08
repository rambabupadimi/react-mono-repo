// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Auth } from '@monorepo-demo/auth';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from 'libs/auth/src/lib/login/login';
import { RequireAuth } from './helpers/required-auth';
import { RequireDashboard } from './helpers/required-dashboard';
import { createTheme, ThemeProvider } from '@mui/material';
import NavLayout from './layouts/nav-layout/nav-layout';
import React from 'react';
import CustomTabs from './custom-tabs/custom-tabs';
import Products from './custom-tabs/products/products';
import Cart from './custom-tabs/cart/cart';
import Checkout from './custom-tabs/checkout/checkout';


const User =  React.lazy(()=> import('./users/user/user'))
const Forms =  React.lazy(()=> import('./forms/forms'))
const Tables =  React.lazy(()=> import('./tables/tables'))
const Topics =  React.lazy(()=> import('./topics/topics'))

const UserDetails = React.lazy(()=> import('./users/user-details/user-details'));



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
          <Route path='' element={ <React.Suspense> <Navigate to="users" /> </React.Suspense>} ></Route>
          <Route path='users' element={ <React.Suspense><User /></React.Suspense>} >
          </Route>
          <Route path='forms' element={ <React.Suspense> <Forms />  </React.Suspense>}></Route>
          <Route path='tables' element={ <React.Suspense> <Tables /> </React.Suspense>}></Route>
          <Route path='topics' element={  <React.Suspense> <Topics /> </React.Suspense>}></Route>
          <Route path='tabs' element={ <React.Suspense> <CustomTabs /> </React.Suspense>}> 
            <Route path='' element={<Navigate to ="products"></Navigate>}></Route>
            <Route path='products' element={<React.Suspense><Products/> </React.Suspense>}> </Route>
            <Route path='cart' element={<React.Suspense><Cart/> </React.Suspense>}> </Route>
            <Route path='checkout' element={<React.Suspense><Checkout/> </React.Suspense>}> </Route>
          </Route>
          <Route path='user-details/:id' element={<React.Suspense> <UserDetails/></React.Suspense>}></Route>
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
