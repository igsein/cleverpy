import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchUser, saveUser, showNavbar } from "../../actions/actions";
import logoBanner from "../../assets/img/logo.png";
import { AppState } from "../../store/store";
import { TRolesUser ,TLogin } from "../../types/types";
import Message from "../../components/Message/Message";

 
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector<AppState, TRolesUser>( (store) => store.login.loguedUser );
  const roles = useSelector< AppState,TLogin >((store) => store.login.roles);

  const [userInput, setUserInput] = useState<string>("");
  const [passInput, setPassInput] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    dispatch(showNavbar(false));
    const data = localStorage.getItem("roles");
    if (userStore != null && userStore.roles.role === "") {
      if ( userStore.roles.email === roles.email &&  userStore.roles.pass === roles.pass ) {
        userStore.roles = roles;
        dispatch(saveUser(userStore));

        localStorage.setItem("roles", JSON.stringify({  role: roles.role, email: roles.email, }) );

        navigate("/cards");
      } else {
        setUserInput("")
        setPassInput("")
        setStatus(true)
        setErrorMessage("Usuario o contraseña incorrectos")
        setTimeout(() => {
          setStatus(false)
        }, 2000);
     
      }
    }

    if (typeof data === "string") {
      navigate("/cards");
    }
  }, [userStore]);

  const handleSubmit = () => {
    dispatch(searchUser(userInput, passInput));
  };

  return (
    <> 
   
    <div className="Login slide-bottom">

      <img src={logoBanner} alt="" />
      <div className="form-div shadow-div">
        <label>Usuario</label>
           <input type="text" name="user" value={userInput} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)  } />
        <label> Contraseña</label>
           <input type="text" name="pass" value={passInput} onChange={(e:  ChangeEvent<HTMLInputElement>) => setPassInput(e.target.value) } />
        <button onClick={handleSubmit} className="button-red">  Enviar </button>
      </div>
     
    </div>
    {status === true ? <Message data={errorMessage} show={true} /> : ""}
    </>
  );
};

export default Login;
