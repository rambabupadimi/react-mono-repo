import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './user.module.scss';
import * as userActions from '../state/user.slice';
import * as addUserActions from '../state/add-user.slice';
import * as deleteUserActions from '../state/delete-user.slice';
import UserListItem from './user-list-item/user-list-item';
import { useNavigate } from 'react-router';
import AddUser from '../add-user/add-user';
import DeleteUser from '../delete-user/delete-user';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  TablePagination,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';

import React from 'react';
import { Stack } from '@mui/system';

/* eslint-disable-next-line */
export interface UserProps {}

interface Column {
  id: 'name' | 'email' | 'location' | 'profilepicture';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 120,
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 120,
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 120,
  },
  {
    id: 'profilepicture',
    label: 'Profile',
    minWidth: 120,
  },
];

export function User(props: UserProps) {
  const dispatch = useDispatch()<any>;
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const users = useSelector(userActions.selectAllUser);
  const totalUsersCount = useSelector(userActions.getTotalUsersCount);

  const getUserStatus = useSelector(userActions.getUserListStatus);
  const navigate = useNavigate();
  const addUserDialogDisplayStatus = useSelector(
    addUserActions.addUserDialogDisplayStatus
  );
  const editUserDialogDisplayStatus = useSelector(
    addUserActions.editUserDialogDisplayStatus
  );
  const deleteUserDialogDisplayStatus = useSelector(
    deleteUserActions.deleteUserDialogDisplayStatus
  );

  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const handleClick = (e:any) => {
      setMenu(e.currentTarget);
  };
  const handleMenuItemClick = (item:any,type:string) => {
    setMenu(null);
    console.log(item);
    console.log(type);

  }

  useEffect(() => {
    if (getUserStatus === 'not loaded') {
      dispatch(userActions.fetchUser(page));
    }
    return () => {
      //destroy call when component destroyed
      //test comment
    };
  }, []);

  const handleItemClick = (event: any) => {
    navigate('../user-details/' + event.id);
  };

  const handleEditButtonClick = (event: any) => {
    setMenu(null);
    console.log(event);
    dispatch(addUserActions.editUserActions.openEditUserDialog(event));
  };

  const handleDeleteButtonClick = (event: any) => {
    setMenu(null);
    dispatch(deleteUserActions.deleteUserActions.openDeleteUserDialog(event));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(newPage);
    setPage(newPage);
    dispatch(userActions.fetchUser(newPage));
  };

  const handleChangeRowsPerPage = () => {
    //setPage(page + 1);
    //dispatch(userActions.fetchUser(page));
  };


  let content;
  console.log(getUserStatus);
  if (getUserStatus === 'loading') {
    content = 'loading....';
    console.log('called loading');
  } else if (getUserStatus === 'loaded') {
    console.log('called loaded');
    content = (
      <Paper>
        <TableContainer>
          <Table aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user: any) => {
                  return (
                    <TableRow>
                      {columns.map((column) => {
                        const value = user[column.id];
                        return <TableCell>{value}</TableCell>;
                      })}
                      <TableCell>

                        <Stack direction="row" spacing={2}>
                        <IconButton id="edit" onClick={(e) => handleEditButtonClick(user)}>
                        <ModeEditIcon/>
                        </IconButton>
                        <IconButton id="delete"  onClick={(e) => handleDeleteButtonClick(user)}>
                        <DeleteIcon/>
                        </IconButton>


                        </Stack>
                       
                        {/* <IconButton
                           id="button"
                           aria-haspopup="true"
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      <button>{user.name}</button>
                         <Menu id="long-menu" 
                         anchorEl={menu}
                         open={open}>
                          <MenuItem onClick={(e) => handleEditButtonClick(user)}> Edit</MenuItem>
                          <MenuItem onClick={ (e) => handleDeleteButtonClick(user)}> Delete</MenuItem>
                    </Menu> */}

                      </TableCell> 
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalUsersCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );

    // <UserListItem
    //   key={user.id}
    //   userClick={handleItemClick}
    //   editButtonClick={handleEditButtonClick}
    //   deleteButtonClick={handleDeleteButtonClick}
    //   user={user}
    // ></UserListItem>
  } else if (getUserStatus === 'error') {
    content = 'data loading error';
  }

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

      {addUserDialogDisplayStatus === true ? (
        <AddUser type="add" isOpen={addUserDialogDisplayStatus}></AddUser>
      ) : (
        ''
      )}
      {editUserDialogDisplayStatus === true ? (
        <AddUser type="edit" isOpen={editUserDialogDisplayStatus}></AddUser>
      ) : (
        ''
      )}
      <DeleteUser isOpen={deleteUserDialogDisplayStatus}></DeleteUser>

       <Stack spacing={2} direction="row"  style={{display:'flex',justifyContent:'right'}}> 
      <Button type="button" variant="contained" onClick={openAddUserDialog}>Add User</Button>
      <Button type="button" variant="outlined" onClick={onLogout} >Logout</Button>
      </Stack>
      <br/>
      {content}
    </div>
  );
}

export default User;
