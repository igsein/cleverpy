import {  GET_ALL_POSTS,   DELETE_POST, SEARCH_BY_AUTHOR, EDIT_POST,  UPDATE_POST,  DELETE_FILTER_POSTS,} from "../types/types";
import { IPostsEstructure } from "../interfaces/interfaces";
import { ActionPosts } from "../types/ActionsTypes";
import { IInitialState } from "../interfaces/interfaces";
import { firstState } from "../store/globalState";

export default function postsReducer( state: IInitialState = firstState,   action: ActionPosts) {
  switch (action.type) {
    case SEARCH_BY_AUTHOR:
      return {
        ...state, arrayBackup: state.array.filter((item: IPostsEstructure): boolean => item.idAuthor === action.payload
        ),
      };

    case GET_ALL_POSTS:
      return { ...state, array: action.payload };

    case DELETE_FILTER_POSTS:
      return { ...state, arrayBackup: [] };

    case EDIT_POST:
      return {...state,editPost: state.array.filter((item) => item.idPost === action.payload),
      };

    case DELETE_POST:
      return {...state,array: state.array.filter((item) => item.idPost !== action.payload),
        arrayBackup: state.arrayBackup.filter(
          (item) => item.idPost !== action.payload
        ),
      };

    case UPDATE_POST:
      return {...state, array: state.array.map((item) => {
          if (item.idPost === action.payload.idPost) {
            item.author = action.payload.author;
            item.body = action.payload.body;
            item.title = action.payload.title;
          }

          return item;
        }),
      };

    default:
      return state;
  }
}
