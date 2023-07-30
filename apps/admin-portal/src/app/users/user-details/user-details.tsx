import { Button, Card, useTheme } from '@mui/material';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { tokens } from 'apps/admin-portal/src/theme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import * as actions  from '../state/user-details.slice';
import { UserEntity } from '../state/user.model';
import styles from './user-details.module.scss';

/* eslint-disable-next-line */
export interface UserDetailsProps {
  // id: number;
}

export function UserDetails(props: UserDetailsProps) {

  const userDetails: UserEntity = useSelector(actions.getUserDetails);
  const userDetailsLoadingStatus = useSelector(actions.getUserDetailsLoadingStatus);
  const { id } = useParams();
  const dispatch = useDispatch()<any>;
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigateBack = () => {
    navigate('../users');
  }

  useEffect(() => {
     dispatch(actions.fetchUserDetails(id));
  },[])

  let result:any;
  if (userDetailsLoadingStatus === 'loading') {
    result = 'Loading....';
  } else if (userDetailsLoadingStatus === 'loaded') {
    result = <div>
      <h1>{userDetails.id}</h1>
      <img src={userDetails.profilepicture}></img>
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.location}</p>

    </div>
  } else if (userDetailsLoadingStatus === 'error') {
    result = 'Error loading data...';
  }

  return (
    <Card className={styles['card-container']} style={{backgroundColor:colors.primary[400]}}>

      <Button type="button" onClick={navigateBack} style={{backgroundColor:colors.primary[500], color:colors.primary[100]}} >Back</Button>

      {result}
    </Card>
  );
}

export default UserDetails;
