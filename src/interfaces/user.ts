export interface User {
  name: string;
  readonly email: string;
  phone_number?: number;
  //   isLogin: () => boolean;
  isLogin(): boolean;
  getAge(age: number): number;
}

export interface User {
  isDriving(status: boolean): string;
}
