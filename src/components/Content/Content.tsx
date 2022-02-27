import { Routes, Route } from "react-router-dom";
import Cards from "../../pages/Cards/Cards";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
 
import "./Content.scss";
const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Content;
