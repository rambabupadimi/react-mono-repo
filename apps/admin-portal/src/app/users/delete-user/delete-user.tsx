import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as deleteUserActions from '../state/delete-user.slice';
import styles from './delete-user.module.scss';

/* eslint-disable-next-line */
export interface DeleteUserProps {
  isOpen: boolean;
}

export function DeleteUser(props: DeleteUserProps) {

  const dispatch = useDispatch()<any>;

  const handleClose = () => {
    dispatch(deleteUserActions.deleteUserActions.closeDeleteUserDialog())
  }


  return (
    <Dialog
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default DeleteUser;
