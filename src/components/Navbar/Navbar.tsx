import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { INavbar } from "../../interfaces/interfaces";
import logoNavbar from "../../assets/img/logoNavbar.png";
import menuBurgerIcon from "../../assets/img/menuBurger.png";
import MenuBurger from "../MenuBurger/MenuBurger";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  let { role }: INavbar = JSON.parse(localStorage.getItem("roles") || "");

  const [renderMenuBurger, setRenderMenuBurger] = useState<boolean>(false);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      {renderMenuBurger === true ? (
        <MenuBurger show={true} setRenderMenuBurger={setRenderMenuBurger}  logout={logout}/>
      ) : (
        ""
      )}
      <div className="Navbar-container ">
        <div className="brand-wrapper">
          <img src={logoNavbar} className="brand-logo" alt="" />
        </div>

        <div className="menu-burger-icon-container">
          <img
            src={menuBurgerIcon}
            className="menu-burger-icon"
            onClick={() => setRenderMenuBurger(true)}
            alt=""
          />
        </div>

        <div className="menu-wrapper">
          <ul className="ul-navbar">
            <li onClick={() => navigate("/")}>Inicio</li>

            <li onClick={() => navigate("/dashboard")}>Panel de usuario </li>
            <li onClick={logout}>Cerrar Sesión</li>
            <li>|</li>
            <li>Bienvenido :{role !== "" ? role : ""}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
