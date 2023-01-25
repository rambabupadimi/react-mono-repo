import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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

  useEffect(() => {
     dispatch(actions.fetchUserDetails(id));
  },[])

  let result:any;
  if (userDetailsLoadingStatus === 'loading') {
    result = 'Loading....';
  } else if (userDetailsLoadingStatus === 'loaded') {
    result = <div>
      <h1>{userDetails.id}</h1>
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
      <p>{userDetails.location}</p>
      <p>{ userDetails.profilepicture}</p>
    </div>
  } else if (userDetailsLoadingStatus === 'error') {
    result = 'Error loading data...';
  }

  return (
    <div className={styles['container']}>
      {result}
    </div>
  );
}

export default UserDetails;
