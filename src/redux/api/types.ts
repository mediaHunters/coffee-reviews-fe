export interface IUser {
  id: string;
  nickname: string;
  email: string;
  role: string;
  password: string;
  lastName?: string;
  firstName?: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
