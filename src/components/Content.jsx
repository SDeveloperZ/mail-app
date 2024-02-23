import React from "react";
import { dataAprobado } from "../utils/index";

function Content() {
  return (
    <div className="container">
      <div className="content">
        <img
          src="https://publicemailimages.s3.amazonaws.com/emailalerts/emoji.svg"
          alt="emoji"
          className="emoticon"
        />
        <h1>Hola {dataAprobado.user}!</h1>
      </div>
      <div className="content">
        <h2>{dataAprobado.title}</h2>
        <img
          src="https://publicemailimages.s3.amazonaws.com/emailalerts/emoji2.svg"
          alt="emoji"
          className="emoticon2"
        />
      </div>
    </div>
  );
}

export default Content;
