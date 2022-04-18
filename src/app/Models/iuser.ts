export interface IUser {
  name: string;
  email: string;
  mobileNo: string[];
  address: {
    street: string;
    postalCode: string
  };
  password: string;
  reachedBy: string;
  reachedByOther?:string;
}
