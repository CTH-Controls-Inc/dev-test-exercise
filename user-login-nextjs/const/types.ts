export type LoginData = {
    user?: UserDTO,
    error?: string,
    key?: InputKeys,
  }

  export enum InputKeys {
    EMAIL = 'email', 
    PASSWORD = 'password',
  }

  type UserDTO = {
      username?: string;
      token: string;
  }