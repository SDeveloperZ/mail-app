// Novedad.jsx
import React, { useState } from "react";
import { dataAprobado } from "../utils";
import getStatusIcon from "../utils/getStatusIcon";

function Novedad() {
  const [statusId, setStatusId] = useState(1); // Inicializamos con 1 (SOLICITUD_CREADA)

  const handleChangeStatus = (newStatusId) => {
    setStatusId(newStatusId);
  };

  const statusIcon = getStatusIcon(statusId);

  return (
    <div className="novedad">
      <div className="contenido">
        <div>
          <button onClick={() => handleChangeStatus(7)}>PENDIENTE</button>
          <button onClick={() => handleChangeStatus(10)}>APROBADA</button>
          <button onClick={() => handleChangeStatus(9)}>RECHAZADA</button>
          <button onClick={() => handleChangeStatus(6)}>REVISION</button>
        </div>
        <p>Novedad: {dataAprobado.info}</p>
        <p>Fecha Desde: {dataAprobado.startDate}</p>
        <p>Fecha Hasta: {dataAprobado.endDate}</p>
        <div className="estado">
          <p>Estado:</p>
          {statusIcon}
        </div>
        <p>
          Observación:
          <br />
          {dataAprobado.notes}
        </p>
      </div>
    </div>
  );
}

export default Novedad;
