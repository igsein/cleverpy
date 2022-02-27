import "./Sidebar.scss";
import { useSelector } from "react-redux";
import SearchByAuthor from "../SearchByAuthor/SearchByAuthor";
import { AppState } from "../../store/store";
import { IPosts } from "../../interfaces/interfaces";
import "./Sidebar.scss";
const Sidebar = () => {
  const posts = useSelector<AppState, IPosts[]>((store) => store.posts.array);
  const posts2 = useSelector<AppState, IPosts[]>(
    (store) => store.posts.arrayBackup
  );

  return (
    <div className="Sidebar">
      <p>
        {" "}
        Número de posts: {posts2.length !== 0 ? posts2.length : posts.length}
      </p>
      <div>
        <SearchByAuthor />
      </div>
    </div>
  );
};

export default Sidebar;
