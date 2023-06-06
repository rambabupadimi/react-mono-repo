import { Alert, Snackbar } from '@mui/material';
import styles from './custom-snackbar.module.scss';

/* eslint-disable-next-line */
export interface CustomSnackbarProps {
  open: boolean
}

export function CustomSnackbar(props: CustomSnackbarProps) {
  return (
    <div className={styles['container']}>
      <Snackbar open={props.open} autoHideDuration={6000} >
      <Alert  severity="success" sx={{ width: '100%' }}>
        This is a success message!
      </Alert>
    </Snackbar>
    </div>
  );
}

export default CustomSnackbar;
