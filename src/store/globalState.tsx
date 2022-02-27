import { ILogin } from "../interfaces/interfaces";

export const firstState = {
  array: [],
  editPost: [],
  arrayBackup: [],
 };

export const secondState: ILogin = {
  roles: {
    role: "Admin",
    email: "admin@admin.com",
    pass: "1234",
  },
  user: [],
  loguedUser: {
    roles: {
      role: "0",
      email: "0",
      pass: "0",
    },
  },
};

export const thirdState = {
  show: false,
};
