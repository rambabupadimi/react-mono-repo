import styles from './auth.module.scss';
import { Outlet } from 'react-router';
import React from 'react';

/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {
  return (
    <div className={styles['container']}>
      <div className={`${styles['auth-section-left']} ${styles['white']}`}>        
       <div className={styles['heading']}><span>REACT</span></div><br/>
       <div className={styles['sub-heading']}><span>Welcome to React World</span></div> 
      </div>
     

      <div className= {styles['auth-section-right']}>
        <Outlet />
      </div>

      <div className={`${styles['auth-section-mobile']}`}>        
       <div className={styles['heading']}><span>REACT</span></div><br/>
       <div className={styles['sub-heading']}><span>Welcome to React World</span></div> 
      </div>
    </div>
  );
}

export default Auth;
