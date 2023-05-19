import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deleteUserActions from '../state/delete-user.slice';
import styles from './delete-user.module.scss';

/* eslint-disable-next-line */
export interface DeleteUserProps {
  isOpen: boolean;
}

export function DeleteUser(props: DeleteUserProps) {

  const dispatch = useDispatch()<any>;
  const deleteUserData = useSelector(deleteUserActions.getDeleteUserData);
  const deleteUserAPIStatus = useSelector(deleteUserActions.getDeleteUserAPIStatus);

  const handleClose = () => {
    dispatch(deleteUserActions.deleteUserActions.closeDeleteUserDialog())
  }

  const handleYes = () => {
    dispatch(deleteUserActions.fetchDeleteUser(deleteUserData.id))
  } 

  useEffect(() => {
    // 
    if(deleteUserAPIStatus === 'loaded') {
      dispatch(deleteUserActions.deleteUserActions.closeDeleteUserDialog())
      dispatch(deleteUserActions.deleteUserActions.resetDeleteUserAPICallStatus())
    }
  },[deleteUserAPIStatus])


  return (
    <Dialog
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        User Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {deleteUserData?.name} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  variant="outlined" onClick={handleClose}>No</Button>
          <Button variant="contained" onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default DeleteUser;
