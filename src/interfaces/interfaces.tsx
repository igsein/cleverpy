import { TRolesUser } from "../types/types";
export interface IDashboard {
  role: string;
  email: string;
}

export interface Iprops {
  id: number;

  show: (value: boolean) => void;
}
export interface INavbar {
  role: string;
}

export interface IPagination {
  pagination: (action: string) => void;
}

export interface IShow {
  show: Boolean;
}

export interface IManagePost {
  idPost: number;
}

export interface IPosts {
  author: string;
  body: string;
  idAuthor: number;
  idPost: number;
  title: string;
}

export interface IInitialState {
  array: IPosts[];
  editPost: IPosts[];
  arrayBackup: IPosts[];
}

export interface ILogin {
  roles: {
    role: string;
    email: string;
    pass: string;
  };

  user: IPosts[];
  loguedUser: TRolesUser;
}

export interface IPostsEstructure {
  author: string;
  body: string;
  idAuthor: number;
  idPost: number;
  title: string;
}


export interface IpropsMessage {
  data: string;
  show:  boolean;
}

export interface IMenuBurgerProps {
  show: boolean;
  setRenderMenuBurger: (value: boolean) => void;
  logout: () => void;
}

 