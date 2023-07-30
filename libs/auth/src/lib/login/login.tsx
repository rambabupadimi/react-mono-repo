import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.scss';
import * as authActions from '../state/auth.slice';

import { useNavigate } from 'react-router';
import { LoginView } from './login-view';
import { useTheme } from '@mui/material';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {tokens} from '../../../../../apps/admin-portal/src/theme'

export function Login() {
  
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();
  const loginLoadingStatus = useSelector(authActions.getLoginStatus);
  const error = useSelector(authActions.getError);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    // called only once
    return () => {
      dispatch(authActions.authActions.loginDestroy());
    }
  }, []);

  const onLogin = (data:any) => {
    dispatch(authActions.doLogin({email: data.email, password: data.password}));
  };

  if (loginLoadingStatus === 'loaded') {
    navigate('../../dashboard', { replace: true });
  }

  return (
    <div className={styles['container']}>
      <LoginView
        loginLoadingStatus = {loginLoadingStatus}
        error = {error}
        onLogin = {onLogin}
      ></LoginView>
    </div>
  );
}

export default Login;
