import styles from './auth.module.scss';
import { Outlet } from 'react-router';
import React from 'react';
import { useTheme } from '@mui/material';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ColorModeContext, tokens } from 'apps/admin-portal/src/theme';

/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div className={styles['container']}>
      <div className={`${styles['auth-section-left']} ${styles['white']}`}
      style={{  backgroundColor:colors.primary[500]}}
      >        
       <div className={styles['heading']} style={{color: colors.primary[100]}}><span>REACT</span></div><br/>
       <div className={styles['sub-heading']} style={{color: colors.primary[100]}}><span>Welcome to React World</span></div> 
      </div>
     

      <div className= {styles['auth-section-right']} style={{backgroundColor:colors.primary[200]}}>
        <Outlet />
      </div>

      <div className={`${styles['auth-section-mobile']}`} style={{backgroundColor:colors.primary[200]}}>        
       <div className={styles['heading']}><span>REACT</span></div><br/>
       <div className={styles['sub-heading']}><span>Welcome to React World</span></div> 
      </div>
    </div>
  );
}

export default Auth;
