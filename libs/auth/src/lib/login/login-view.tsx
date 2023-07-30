import {
  TextField,
  Button,
  CircularProgress,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
  Stack,
  useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from './login-view.module.scss';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {tokens} from '../../../../../apps/admin-portal/src/theme'



interface LoginViewProps {
  loginLoadingStatus: string;
  onLogin: any;
  error: any;
}

export const LoginView = (props: LoginViewProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(errors);

  const onSubmit = (data: any) => {
    console.log('called submit', data);
    props.onLogin(data);
  };

  return (
    <div>
      <div className={styles['login-heading']}> Login</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{ marginBottom: '24px' }}
      >
        <div className={styles['input-group']}>
          <FormControl
            style={{ width: '100%' }}
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
          <br />
          <br />
          <FormControl
            style={{ width: '100%' }}
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
        </div>
        <div className={styles['login-button-group']}>
          {props.loginLoadingStatus === 'loading' ? (
            <Button
              type="button"
              className={styles['login-button']}
              variant="contained"
              style={{backgroundColor:colors.primary[500]}}
            >
              <CircularProgress
                size={24}
                sx={{
                  color: colors.grey[100],
                }}
              />
            </Button>
          ) : (
            <Button
              type="submit"
              className={styles['login-button']}
              variant="contained"
              style={{backgroundColor:colors.primary[500]}}
            >
              Login
            </Button>
          )}
        </div>
      </form>

      <div>
        {props.error ? (
          <div className={styles['error-banner']}>Error: {props.error}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

