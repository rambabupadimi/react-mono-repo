import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.scss';
import * as authActions from '../state/auth.slice';

import { useNavigate } from 'react-router';
import { LoginView } from './login-view';

export function Login() {
  
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();
  const loginLoadingStatus = useSelector(authActions.getLoginStatus);
  const error = useSelector(authActions.getError);

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
