export interface AuthEntity {
  id: number;
}

export interface UserEntity{
  Id: number;
  Name: string;
  Email: string;
  Token: string;
}

export interface LoginResponse {
  data: UserEntity,
  code: number,
  message: string;
}
