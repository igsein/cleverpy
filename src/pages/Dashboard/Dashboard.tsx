import React, { useEffect, useState } from "react";
import { IDashboard } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { showNavbar } from "../../actions/actions";
import profileUser from "../../assets/img/profileUser.png"
 

import "./Dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  useEffect(() => {
    let { role, email }: IDashboard = JSON.parse( localStorage.getItem("roles") || "" );
    dispatch(showNavbar(true));
    setName(role);
    setEmail(email);
  }, []);

  return (
    <div className="Dashboard slide-in-bottom">
      <div className="container-dashboard ">
        <div className="info-user-dashboard">
<img src={profileUser} alt="" />
          <p>Nombre: {name}</p>
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
