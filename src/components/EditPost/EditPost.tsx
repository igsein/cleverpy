import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../actions/actions";
import { AppState } from "../../store/store";
import { Iprops, IPosts } from "../../interfaces/interfaces";
import "./EditPost.scss";

const EditPost = (props: Iprops) => {
  const dispatch = useDispatch();
  const posts = useSelector<AppState, IPosts[]>(
    (store) => store.posts.editPost
  );

  const [title, setTitle] = useState<string>(posts[0].title);
  const [author, setAuthor] = useState<string>(posts[0].author);
  const [body, setBody] = useState<string>(posts[0].body);

  const updatePostFunc = () => {
    let data = {
      idPost: posts[0].idPost,
      idAuthor: posts[0].idAuthor,
      title: title,
      author: author,
      body: body,
    };

    dispatch(updatePost(data));

    props.show(false);
  };

  return (
    <div className="EditPost swing-in-top-fwd">
      <div className="post-cards ">
        <label htmlFor="">Título</label>

        <input
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />

        <label htmlFor="">Autor</label>

        <input
          placeholder={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
        />

        <label htmlFor="">Texto</label>

        <textarea
          placeholder={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className="button-red" onClick={updatePostFunc}>
          Modificar Post
        </button>
        <button className="button-red" onClick={() => props.show(false)}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditPost;
