import { AnyAsyncThunk } from '@reduxjs/toolkit/dist/matchers';
import { useDispatch } from 'react-redux';
import styles from './user-list-item.module.scss';

/* eslint-disable-next-line */
export interface UserListItemProps {
  user: any;
  userClick: any;
  editButtonClick: any;
  deleteButtonClick: any;
}

export function UserListItem(props: UserListItemProps) {

  const dispatch = useDispatch()<any>;


  const handleClick = () => {
    props.userClick(props.user);
  }

  const handleEdit = () => {
    props.editButtonClick(props.user)
  }

  const handleDelete = () => {
    props.deleteButtonClick(props.user);
  }

  return (
    <div className={styles['container']}  >
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
      <p>{props.user.location}</p>
      <button type='button' onClick={handleClick} >View Details</button>
      <button type='button' onClick={handleEdit} >Edit</button>
      <button type='button' onClick={handleDelete} >Delete</button>
    </div>
  );
}

export default UserListItem;
