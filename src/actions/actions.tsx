import axios from "axios";
import { Dispatch } from "redux";
import {  GET_ALL_POSTS,  DELETE_POST,  SEARCH_BY_AUTHOR,  CHECK_USER,  SAVE_USER,  SHOW_NAVBAR,  EDIT_POST,  UPDATE_POST,  DELETE_FILTER_POSTS,  LOAD_DATA_USER,   TRolesUser,} from "../types/types";
import {IPosts} from "../interfaces/interfaces"

export const deletePost = (id: number) => async (dispatch: Dispatch) => {

 /*  MAQUETACIÓN SI SE HICIERA UNA PETICIÓN DELETE PARA ELIMINAR EL POST EN VEZ DE ELIMINAR DIRECTAMENTE DESDE 
 EL STORE ,
          await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}/`) 
  */


  try {
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (error) {}
};

export const getAllPosts = (postsData: IPosts[]) => async (dispatch: Dispatch) => {
    try {
      if (postsData.length > 0) {
        dispatch({
          type: GET_ALL_POSTS,
          payload: postsData,
        });
      } else {
        let post: IPosts[] = [];
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );

        const users = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );

        for (let index = 0; index < res.data.length; index++) {
          const postsElements = res.data[index];

          for (let index = 0; index < users.data.length; index++) {
            const usersElements = users.data[index];

            if (postsElements.userId === usersElements.id) {
              let data: IPosts = {
                idPost: postsElements.id,
                idAuthor: usersElements.id,
                author: usersElements.name,
                title: postsElements.title,
                body: postsElements.body,
              };

              post.push(data);
            } else {
            }
          }
        }

        dispatch({
          type: GET_ALL_POSTS,
          payload: post,
        });
      }
    } catch (error) {}
  };
export const searchByAuthor = (idAuthor: number) => (dispatch: Dispatch) => {
  dispatch({
    type: SEARCH_BY_AUTHOR,
    payload: idAuthor,
  });
};

export const searchUser =  (email: string, pass: string) => async (dispatch: Dispatch) => {
    let data: TRolesUser = {
      roles: {
        role: "",
        email,
        pass,
      },
    };

    dispatch({
      type: CHECK_USER,
      payload: data,
    });
  };

export const saveUser = (data: TRolesUser) => async (dispatch: Dispatch) => {
  dispatch({
    type: SAVE_USER,
    payload: data,
  });
};

export const showNavbar = (data: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: SHOW_NAVBAR,
    payload: data,
  });
};

export const editPost = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: EDIT_POST,
    payload: id,
  });
};

export const updatePost = (data: IPosts) => (dispatch: Dispatch) => {

 /*  MAQUETACIÓN SI SE HICIERA UNA PETICIÓN UPDATE PARA ACTUALIZAR EL POST EN VEZ DE ACTUALIZARLO DIRECTAMENTE DESDE 
 EL STORE ,
       axios.put(`https://jsonplaceholder.typicode.com/posts/${id}/`) 
  */



  dispatch({
    type: UPDATE_POST,
    payload: data,
  });
};

export const deleteFilterPosts = () => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_FILTER_POSTS,
  });
};

export const loadDataUser = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: LOAD_DATA_USER,
    payload: id,
  });
};
