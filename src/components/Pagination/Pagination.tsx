import "./Pagination.scss";
import {IPagination} from "../../interfaces/interfaces"
 
const Pagination = (props :IPagination ) => {
  return (
    <div className="Pagination">
      <button onClick={() => props.pagination("back")}>Anterior</button>
      <button onClick={() => props.pagination("next")}>Siguiente</button>
    </div>
  );
};

export default Pagination;
