import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPosts, showNavbar } from "../../actions/actions";
import ManagePosts from "../../components/ManagePost/ManagePost";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "../../components/Pagination/Pagination";
import { AppState } from "../../store/store";
import { IPosts } from "../../interfaces/interfaces";
import "./Cards.scss";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector<AppState, IPosts[]>((store) => store.posts.array);
  const posts2 = useSelector<AppState, IPosts[]>(
    (store) => store.posts.arrayBackup
  );

  const [previousPage, setPreviousPage] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(4);

  useEffect(() => {
    const localStorageData = localStorage.getItem("roles");
    if (typeof localStorageData === "string") {
      dispatch(showNavbar(true));
      dispatch(getAllPosts(posts));
    } else {
      navigate("/");
    }
  }, []);

  const pagination = (action: string) => {
    if (action === "next") {
      if (nextPage < posts.length) {
        setPreviousPage(nextPage - 4);
        setNextPage(nextPage + 4);
      }
    } else if (action === "back") {
      if (previousPage > 0) {
        setPreviousPage(previousPage - 4);
        setNextPage(previousPage + 4);
      }
    }
  };

  useEffect(() => {
    setPreviousPage(0);
    setNextPage(4);
  }, [posts2]);

  return (
    <>
      <Pagination pagination={pagination} />

      <div className="Cards ">
        <Sidebar />
        <div className="container-cards slide-in-bottom">
          {posts !== []
            ? posts2.length > 0
              ? posts2
                  .map((item, i) => (
                    <div className="post-cards" key={i}>
                      <ManagePosts idPost={item.idPost} />
                      <div>
                        <h4>{item.title}</h4>
                        <h6>Autor: {item.author}</h6>
                        <h6>
                          Id Autor: {item.idAuthor} /Id Post: {item.idPost}
                        </h6>

                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))
                  .slice(previousPage, nextPage)
              : posts
                  .map((item, i) => (
                    <div className="post-cards" key={i}>
                      <ManagePosts idPost={item.idPost} />
                      <div>
                        <h4>{item.title}</h4>
                        <h6>Autor: {item.author}</h6>
                        <h6>
                          Id Autor: {item.idAuthor} /Id Post: {item.idPost}
                        </h6>

                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))
                  .slice(previousPage, nextPage)
            : ""}
        </div>
      </div>
    </>
  );
};

export default Cards;
