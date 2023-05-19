import styles from './add-user.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {
  DialogContent,
  DialogActions,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
  Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserActions,
  addUserAPICallStatus,
  editUserActions,
  editUserAPICallStatus,
  fetchAddUser,
  fetchEditUser,
  getEditUserData,
  
} from '../state/add-user.slice';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface AddUserProps {
  isOpen: boolean;
  type: string;
  data?:any;
}

export function AddUser(props: AddUserProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch<any>();
  const addUserAPIStatus = useSelector(addUserAPICallStatus);
  const editUserAPIStatus = useSelector(editUserAPICallStatus);
  const editUserData = useSelector(getEditUserData);

  useEffect(() => {
    console.log('called use effect');
    if (addUserAPIStatus === 'loaded') {
      dispatch(addUserActions.closeAddUserDialog());
      dispatch(addUserActions.resetAddUserAPICallStatus());
    }
    if(editUserAPIStatus === 'loaded') {
      dispatch(editUserActions.closeEditUserDialog());
      dispatch(editUserActions.resetEditUserAPICallStatus());
    }

    if(props.type === 'edit' && editUserData) {
      setValue('email', editUserData.email);
      setValue('location',editUserData.location);
      setValue('name',editUserData.name);
    }

  }, [addUserAPIStatus,editUserData]);


  const handleClose = () => {
    if (props.type === 'add') {
      dispatch(addUserActions.closeAddUserDialog());
    } else {
      dispatch(editUserActions.closeEditUserDialog());
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    if(props.type === 'add'){
      dispatch(fetchAddUser(data));
    }
    else
    {
      data.id = editUserData.id;
      console.log("edit api data",data);
      dispatch(fetchEditUser(data));
    }

  };  

  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <div style={{ width: 500 }}>
        <DialogTitle> 
          { props.type === 'add' ? 'Add User' : 'Edit User'}
          </DialogTitle>

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
                error={Boolean(errors['name'])}
              >
                <InputLabel htmlFor="component-filled">Name</InputLabel>
                <FilledInput
                  id="component-filled"
                  {...register('name', {
                    required: 'Name required',
                    maxLength: 15,
                    minLength: 6,
                  })}
                />
                <FormHelperText>
                  {errors['name']?.type === 'required' &&
                    errors['name'].message?.toString()}
                  {errors['name']?.type === 'minLength' &&
                    'Name miniumm 6 characters'}
                  {errors['name']?.type === 'maxLength' &&
                    'Name below 15 characters'}
                </FormHelperText>
              </FormControl>

              <FormControl
                variant="filled"
                required
                error={Boolean(errors['location'])}
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
