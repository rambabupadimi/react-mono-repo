/**
 * Interface for the 'Users' data
 */
 export interface UserEntity {
  id: string | number; // Primary ID
  name: string;
  email: string;
  profilepicture: string;
  location: string;
  createdat: string;
}

export interface UsersListResponse {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: Array<UserEntity>
}


export interface AddUserItem {
  name: string;
  email: string;
  location: string;
}

export interface EditUserItem {
  id: string;
  name: string;
  email: string;
  location: string;
}
