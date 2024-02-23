// Novedad.jsx
import React, { useState } from "react";
import { dataStatus } from "../utils";

function Novedad() {
  const [statusId, setStatusId] = useState(1); // Inicializamos con 1 (SOLICITUD_CREADA)
  console.log(statusId)

  const handleChangeStatus = (newStatusId) => {
    setStatusId(newStatusId);
  };
  // const statusIcon = getStatusIcon(statusId);

  return (
    <div>
      <div className="container">
        <div className="content">
          <img
          src="https://publicemailimages.s3.amazonaws.com/emailalerts/emoji.svg"
          alt="emoji"
          className="emoticon"
        />
        <h1>Hola {dataStatus.map((data) => { if(data.id === statusId){return data.user; }})}!</h1>
      </div>
      <div className="content">
        <h2> {dataStatus.map((data) => { if(data.id === statusId){return data.title; }})}</h2>
        <img
          src="https://publicemailimages.s3.amazonaws.com/emailalerts/emoji2.svg"
          alt="emoji"
          className="emoticon2"
        />
      </div>
      </div>
        <div className="novedad">
          <div className="contenido">
            <div>
              <button onClick={() => handleChangeStatus(4)}>PENDIENTE</button>
              <button onClick={() => handleChangeStatus(10)}>APROBADA</button>
              <button onClick={() => handleChangeStatus(12)}>RECHAZADA</button>
              <button onClick={() => handleChangeStatus(6)}>REVISION</button>
            </div>
            <p>Novedad: {dataStatus.map((data) => { if(data.id === statusId){return data.info; }})}</p>
            <p>Fecha Desde: {dataStatus.map((data) => { if(data.id === statusId){return data.startDate; }})}</p>
            <p>Fecha Hasta: {dataStatus.map((data) => { if(data.id === statusId){return data.endDate; }})}</p>
            <div className="estado">
              <p>Estado:</p>
              {dataStatus.map((data) => { if(data.id === statusId){return <img src={data.status} />; }})}
            </div>
            <p>
              Observación:
              <br />
              {dataStatus.map((data) => { if(data.id === statusId){return data.notes; }})}
            </p>
          </div>
        </div>
    </div>
  );
}

export default Novedad;
