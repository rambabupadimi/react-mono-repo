import styles from './auth.module.scss';
import { Outlet } from 'react-router';
import React from 'react';

/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {
  return (
    <React.Fragment>
    <div className={styles['container']}>
      <h1>Welcome to Auth!</h1>
      <Outlet />
      </div>
      </React.Fragment>
  );
}

export default Auth;
