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

export function App() {
  return (
    <>
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
    </>
  );
}

export default App;
