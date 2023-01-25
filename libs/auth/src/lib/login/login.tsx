import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { doLogin } from '../state/auth.slice';
import styles from './login.module.scss';
import * as authActions from '../state/auth.slice';
import { useNavigate } from 'react-router';
/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const dispatch = useDispatch()<any>;
  const loginLoadingStatus = useSelector(authActions.getLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    // called only once
  }, [dispatch]);

  const onLogin = () => {
    const loginRequest = { email: 'Developer@gmail.com', password: '123456' };
    dispatch(authActions.doLogin(loginRequest));
  };

  console.log('login page----', loginLoadingStatus);

  if (loginLoadingStatus === 'loaded') {
    console.log('login loading status----');
    navigate('../../users', { replace: true });
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
      <button type="button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
