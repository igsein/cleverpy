import React, { useState, useEffect } from "react";
import { IpropsMessage } from "../../interfaces/interfaces";
import "./Message.scss";

const Message = (props: IpropsMessage) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(props.show);

    showDiv();
  }, []);

  useEffect(() => {}, [show]);

  const showDiv = () => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const contentMessage = () => {
    return <div className="Message swing-in-top-fwd">{props.data}</div>;
  };

  return <div>{show === true ? contentMessage() : ""}</div>;
};

export default Message;
