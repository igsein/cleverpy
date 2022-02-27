export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";
export const SEARCH_BY_AUTHOR = "SEARCH_BY_AUTHOR";
export const CHECK_USER = "CHECK_USER";
export const SAVE_USER = "SAVE_USER";
export const SHOW_NAVBAR = "SHOW_NAVBAR";
export const EDIT_POST = "EDIT_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_FILTER_POSTS = "DELETE_FILTER_POSTS";
export const LOAD_DATA_USER = "LOAD_DATA_USER";

export type TRolesUser = {
  roles: {
    role: string;
    email: string;
    pass: string;
  };
};

export type TLogin = {
 
    role: string;
    email: string;
    pass: string;
 
};

 




export type DashboardType = {
  role: string;
  email: string;
};

export type TActionReducer = {
  type: string;
  payload: TRolesUser;
};

export type Tshow = {
  show: Boolean;
};
