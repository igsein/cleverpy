import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import {searchByAuthor, deleteFilterPosts} from "../../actions/actions";
import "./SearchByAuthor.scss";

const SearchByAuthor = () => {
  const [author, setAuthor] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [showAllPosts, setAllShowPosts] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <div className="container-search-by-author">
      {showSearch == true ? (
        <>
          <h4>Búsqueda por Id de Autor:</h4>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <button
            className="button-red"
            onClick={() => {
              dispatch(searchByAuthor(parseInt(author)));
              setAuthor("");
              setShowSearch(false);
              setAllShowPosts(true);
            }}
          >
            Buscar
          </button>
        </>
      ) : (
        ""
      )}
      {showAllPosts == true ? (
        <button
          className="button-red"
          onClick={() => {
            {
              dispatch(deleteFilterPosts());
              setAllShowPosts(false);
              setShowSearch(true);
            }
          }}
        >
          Mostrar todos los posts
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchByAuthor;
