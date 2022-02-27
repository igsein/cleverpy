import  { useState, useEffect } from "react";
import "./MenuBurger.scss";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/img/close.png";
import { IMenuBurgerProps } from "../../interfaces/interfaces";

const MenuBurger = (props: IMenuBurgerProps) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { show, setRenderMenuBurger, logout } = props;

  useEffect(() => {
    setShowMenu(show);
  }, []);

  return (
    <>
      {showMenu === true ? (
        <div className="MenuBurger slide-in-bottom">
          <img
            src={closeIcon}
            alt="cerrar"
            onClick={() => setRenderMenuBurger(false)}
          ></img>
          <p onClick={() => navigate("/")}>Inicio</p>
          <p
            onClick={() => {
              navigate("/dashboard");
              setRenderMenuBurger(false);
            }}
          >
            Panel de usuario{" "}
          </p>
          <p onClick={logout}>Cerrar sesión</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MenuBurger;
