import { IPostsEstructure } from "../interfaces/interfaces";
import { IPosts } from "../interfaces/interfaces";
export type ActionPosts =
  | {
      type: "SEARCH_BY_AUTHOR";
      payload: number;
    }
  | {
      type: "DELETE_POST";
      payload: number;
    }
  | {
      type: "GET_ALL_POSTS";
      payload: IPostsEstructure[];
    }
  | {
      type: "DELETE_FILTER_POSTS";
    }
  | {
      type: "EDIT_POST";
      payload: number;
    }
  | {
      type: "DELETE_POST";
      payload: number;
    }
  | {
      type: "UPDATE_POST";
      payload: IPosts;
    };


export type ActionsNavbar = {
      type: "SHOW_NAVBAR";
      payload: boolean;
    };