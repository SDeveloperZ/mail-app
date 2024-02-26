import React, { useState } from 'react';
import { dataStatus } from '../utils';

const Novedad = () => {
  const [statusId, setStatusId] = useState(1);

  const handleChangeStatus = (newStatusId) => {
    setStatusId(newStatusId);
  };

  const currentStatus = dataStatus.find((data) => data.id.includes(statusId));

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => handleChangeStatus(4)}>PENDIENTE</button>
        <button onClick={() => handleChangeStatus(10)}>APROBADA</button>
        <button onClick={() => handleChangeStatus(12)}>RECHAZADA</button>
        <button onClick={() => handleChangeStatus(6)}>REVISION</button>
      </div>
      {currentStatus && (
        <div>
          <div className="container">
            <div className="content">
              <img
                src="https://publicemailimages.s3.amazonaws.com/emailalerts/emoji.svg"
                alt="emoji"
                className="emoticon"
              />
              <h1>Hola {currentStatus.user}!</h1>
            </div>
            <div className="content">
              <h2>{currentStatus.title}</h2>
              <img
                src="https://publicemailimages.s3.amazonaws.com/emailalerts/emoji2.svg"
                alt="emoji"
                className="emoticon2"
              />
            </div>
          </div>
          <div className="novedad">
            <div className="contenido">
              <p>Novedad: {currentStatus.info}</p>
              <p>Fecha Desde: {currentStatus.startDate}</p>
              <p>Fecha Hasta: {currentStatus.endDate}</p>
              <div className="estado">
                <p>Estado:</p>
                <img src={currentStatus.status} alt="Estado" />
              </div>
              <p>
                Observación: <br /> {currentStatus.notes}
              </p>
            </div>
          </div>
          <div className="button">{currentStatus.button && <img src={currentStatus.button} alt="Botón" />}</div>
        </div>
      )}
    </div>
  );
};

export default Novedad;
