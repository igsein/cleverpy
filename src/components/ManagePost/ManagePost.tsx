import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../../actions/actions";
import delPostIcon from "../../assets/img/trash.png";
import editPostIcon from "../../assets/img/edit.png";
import EditPost from "../EditPost/EditPost";
import { IManagePost } from "../../interfaces/interfaces";
import "./ManagePost.scss";

const ManagePost = (props: IManagePost) => {
  const dispatch = useDispatch();

  const [showEditPost, setShowEditPost] = useState<boolean>(false);

  return (
    <>
      <div className="actions-posts-container">
        <img
          onClick={() => dispatch(deletePost(props.idPost))}
          className="delete-icon"
          src={delPostIcon}
          alt="Eliminar Post"
        ></img>
        <img
          onClick={() => {
            setShowEditPost(true);
            dispatch(editPost(props.idPost));
          }}
          className="delete-icon"
          src={editPostIcon}
          alt="Eliminar Post"
        ></img>
      </div>
      {showEditPost === true ? (
        <EditPost show={setShowEditPost} id={props.idPost} />
      ) : (
        ""
      )}
    </>
  );
};

export default ManagePost;
