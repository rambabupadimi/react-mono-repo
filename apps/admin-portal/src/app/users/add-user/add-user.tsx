import styles from './add-user.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  Link,
  Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUserActions, addUserAPICallStatus, editUserActions,fetchAddUser } from '../state/add-user.slice';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { userActions } from '../state/user.slice';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface AddUserProps {
  isOpen: boolean;
  type: string;
}

export function AddUser(props: AddUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch<any>();
  const addUserAPIStatus = useSelector(addUserAPICallStatus);
  const handleClose = () => {
    if (props.type === 'add') {
      dispatch(addUserActions.closeAddUserDialog());
    } else {
      dispatch(editUserActions.closeEditUserDialog());
    }
  };

  useEffect(() => {
    if (addUserAPIStatus === 'loaded') {
      dispatch(addUserActions.closeAddUserDialog());
    }
  },[addUserAPIStatus])

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(fetchAddUser(data));
  };

  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <div style={{ width: 500 }}>
        <DialogTitle>Add User</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogContent>
            <Stack direction="column" spacing={2}>
              <FormControl
                variant="filled"
                required
                error={Boolean(errors['email'])}
              >
                <InputLabel htmlFor="component-filled">Email</InputLabel>
                <FilledInput
                  id="component-filled"
                  {...register('email', {
                    required: 'Email required',
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                />
                <FormHelperText>
                  {errors['email']?.type === 'required' &&
                    errors['email'].message?.toString()}
                  {errors['email']?.type === 'pattern' &&
                    'Enter valid email format'}
                </FormHelperText>
              </FormControl>

              <FormControl
                variant="filled"
                required
                error={Boolean(errors['password'])}
              >
                <InputLabel htmlFor="component-filled">Password</InputLabel>
                <FilledInput
                  id="component-filled"
                  {...register('password', {
                    required: 'Password required',
                    maxLength: 15,
                    minLength: 6,
                  })}
                />
                <FormHelperText>
                  {errors['password']?.type === 'required' &&
                    errors['password'].message?.toString()}
                  {errors['password']?.type === 'minLength' &&
                    'Password miniumm 6 characters'}
                  {errors['password']?.type === 'maxLength' &&
                    'Password below 15 characters'}
                </FormHelperText>
              </FormControl>

              <FormControl
                variant="filled"
                required
                error={Boolean(errors['password'])}
              >
                <InputLabel htmlFor="component-filled">Location</InputLabel>
                <FilledInput
                  multiline
                  id="component-filled"
                  {...register('location', {
                    required: 'Location required',
                    maxLength: 100,
                    minLength: 6,
                  })}
                />
                <FormHelperText>
                  {errors['location']?.type === 'required' &&
                    errors['location'].message?.toString()}
                  {errors['location']?.type === 'minLength' &&
                    'Location miniumm 6 characters'}
                  {errors['location']?.type === 'maxLength' &&
                    'Location below 100 characters'}
                </FormHelperText>
              </FormControl>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </div>
    </Dialog>
  );
}

export default AddUser;
