import styles from './form-view.module.scss';

import {
  FormControl,
  InputLabel,
  FilledInput,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Switch,
  TextareaAutosize,
  Select,
  MenuItem,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { UserForm } from '../state/form.model';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface FormViewProps {
  data: UserForm;
  saveData:any;
}

export function FormView(props: FormViewProps) {

  

  const [ugCheckQualification, setUgCheckQualification] = useState(false);
  const [pgCheckQualification, setPgCheckQualification] = useState(false);
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState('female');
  const [userInterest, setUserInterest] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      qualification: '',
      gender: '',
      isInterest: false,
      age: 10,
    },
  });



  useEffect(() => {
    console.log(props.data);
    patchFormData();
 
  }, []);

 const patchFormData = () =>{
    setValue('firstName', props.data.firstName);
    setValue('lastName', props.data.lastName);
    setValue('email', props.data.email);
    setValue('address', props.data.address);
    setValue('qualification', props.data.qualification);
    setValue('gender', props.data.gender);
    setValue('isInterest', props.data.isInterest);
    setValue('age', props.data.age);
    if(props.data.qualification ==='ug') {
      setUgCheckQualification(true);
    } else {
      setPgCheckQualification(true);
    }

    setAge(props.data.age);
    setGender(props.data.gender);
    setUserInterest(props.data.isInterest);
  }

  const onSubmit = (data: any) => {
    console.log(data);
    props.saveData(data)
  };


  return (
    <div className={styles['container']}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* First Name */}
          <FormControl
            variant="filled"
            required
            error={Boolean(errors['firstName'])}
          >
            <InputLabel htmlFor="component-filled">First Name</InputLabel>
            <FilledInput
              id="firstName"
              {...register('firstName', {
                required: 'First name required',
                maxLength: 15,
                minLength: 2,
              })}
            />
            <FormHelperText>
              {errors['firstName']?.type === 'required' &&
                errors['firstName'].message?.toString()}
              {errors['firstName']?.type === 'minLength' &&
                'Name miniumm 2 characters'}
              {errors['firstName']?.type === 'maxLength' &&
                'Name below 15 characters'}
            </FormHelperText>
          </FormControl>

          {/* Last Name */}
          <FormControl
            variant="filled"
            required
            error={Boolean(errors['lastName'])}
          >
            <InputLabel htmlFor="component-filled">Last Name</InputLabel>
            <FilledInput
              id="lastName"
              {...register('lastName', {
                required: 'Last name required',
                maxLength: 15,
                minLength: 2,
              })}
            />
            <FormHelperText>
              {errors['lastName']?.type === 'required' &&
                errors['lastName'].message?.toString()}
              {errors['lastName']?.type === 'minLength' &&
                'Name miniumm 2 characters'}
              {errors['lastName']?.type === 'maxLength' &&
                'Name below 15 characters'}
            </FormHelperText>
          </FormControl>

          {/* Email       */}

          <FormControl
            variant="filled"
            required
            error={Boolean(errors['email'])}
          >
            <InputLabel htmlFor="component-filled">Email</InputLabel>
            <FilledInput
              id="email"
              {...register('email', {
                required: 'Email required',
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            <FormHelperText>
              {errors['email']?.type === 'required' &&
                errors['email'].message?.toString()}
              {errors['email']?.type === 'pattern' && 'Enter valid email'}
            </FormHelperText>
          </FormControl>

          {/* Address   */}

          <FormControl required error={Boolean(errors['address'])}>
            <FormLabel>Enter Address:</FormLabel>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Address"
              {...register('address', {
                required: 'Address required',
                maxLength: 50,
                minLength: 2,
              })}
            />
            <FormHelperText>
              {errors['address']?.type === 'required' &&
                errors['address'].message?.toString()}
              {errors['address']?.type === 'minLength' &&
                'Name miniumm 2 characters'}
              {errors['address']?.type === 'maxLength' &&
                'Name below 50 characters'}
            </FormHelperText>
          </FormControl>

          {/* Color checkbox      */}

          <FormControl required error={Boolean(errors['qualification'])}>
            <FormGroup>
              <FormLabel>Qualification</FormLabel>
              <FormControlLabel
                {...register('qualification', {
                  required: 'Qualification required',
                })}
                value="ug"
                control={<Checkbox
                  
                  checked={ugCheckQualification} onChange={(e)=>{ console.log(e);
                  setUgCheckQualification(e.target.checked)
                }} />}
                label="UG"
              />
              <FormControlLabel
                {...register('qualification', {
                  required: 'Qualification required',
                })}
                value="pg"
                control={<Checkbox checked={pgCheckQualification} onChange={(e)=>{ console.log(e); setPgCheckQualification(e.target.checked) }} />}
                label="PG"
              />
            </FormGroup>
          </FormControl>

          {/* Dropdown Age      */}

          <FormControl
            fullWidth
            required
            {...register('age', {
              required: 'Age required',
            })}
            error={Boolean(errors['age'])}
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(e:any)=> { console.log(e);
                      setAge(e.target.value);}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {/* Gender   */}

          <FormControl required error={Boolean(errors['gender'])}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={gender}
              onChange={(e:any)=> {console.log(e);
              setGender(e.target?._wrapperState.initialValue)
              }}
            >
              <FormControlLabel
                {...register('gender', {
                  required: 'Gender required',
                })}
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                {...register('gender', {
                  required: 'Gender required',
                })}
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                {...register('gender', {
                  required: 'Gender required',
                })}
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {/* Switch         */}

          <FormControl>
            <FormLabel>Are you interest to learn REACT? </FormLabel>
            <FormControlLabel
              {...register('isInterest')}
              control={<Switch checked={userInterest}  onChange={(e)=>{ setUserInterest(e.target.checked) }} />}
              label={undefined}
            />
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormView;
