import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './user.module.scss';
import * as userActions from '../state/user.slice';
import * as addUserActions from '../state/add-user.slice';
import * as deleteUserActions from '../state/delete-user.slice';
import UserListItem from './user-list-item/user-list-item';
import { useNavigate } from 'react-router';
import AddUser from '../add-user/add-user';
import DeleteUser from '../delete-user/delete-user';

/* eslint-disable-next-line */
export interface UserProps {}

export function User(props: UserProps) {
  const dispatch = useDispatch()<any>;
  const [page, setPage] = useState(1);
  const users = useSelector(userActions.selectAllUser);
  const getUserStatus = useSelector(userActions.getUserListStatus);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const addUserDialogDisplayStatus = useSelector(
    addUserActions.addUserDialogDisplayStatus
  );
  const editUserDialogDisplayStatus = useSelector(
    addUserActions.editUserDialogDisplayStatus
  );
  const deleteUserDialogDisplayStatus = useSelector(
    deleteUserActions.deleteUserDialogDisplayStatus
  );

  useEffect(() => {
    if (getUserStatus === 'not loaded') {
      dispatch(userActions.fetchUser(page));
    }
    return () => {
      //destroy call when component destroyed
    };
  }, []);

  const handleItemClick = (event: any) => {
    navigate('../user-details/' + event.id);
  };

  const handleEditButtonClick = (event: any) => {
    dispatch(addUserActions.editUserActions.openEditUserDialog());
  };

  const handleDeleteButtonClick = (event: any) => {
    dispatch(deleteUserActions.deleteUserActions.openDeleteUserDialog());
  };

  let content;
  console.log(getUserStatus);
  if (getUserStatus === 'loading') {
    content = 'loading....';
    console.log('called loading');
  } else if (getUserStatus === 'loaded') {
    console.log('called loaded');
    content =
      users &&
      users.map((user: any) => {
        return (
          <UserListItem
            key={user.id}
            userClick={handleItemClick}
            editButtonClick={handleEditButtonClick}
            deleteButtonClick={handleDeleteButtonClick}
            user={user}
          ></UserListItem>
        );
      });
  } else if (getUserStatus === 'error') {
    content = 'data loading error';
  }

  const loadNext = () => {
    setPage(page + 1);
    dispatch(userActions.fetchUser(page));
  };

  const onLogout = () => {
    localStorage.clear();
    navigate('../auth/login', { replace: true });
  };

  const openAddUserDialog = () => {
    dispatch(addUserActions.addUserActions.openAddUserDialog());
  };

  return (
    <div className={styles['container']}>
      <br />

      <AddUser type="add" isOpen={addUserDialogDisplayStatus}></AddUser>
      <AddUser type="edit" isOpen={editUserDialogDisplayStatus}></AddUser>
      <DeleteUser isOpen={deleteUserDialogDisplayStatus}></DeleteUser>

      <button type="button" onClick={openAddUserDialog}>
        Add User
      </button>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
      <button type="button" onClick={loadNext}>
        Load Next
      </button>

      {content}
    </div>
  );
}

export default User;
