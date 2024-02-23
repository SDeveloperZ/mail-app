import React from "react";
import { dataAprobado } from "../utils/index";
import { dataRechazado } from "../utils//index";
import { dataPendiente } from "../utils//index";
import { dataRevision } from "../utils//index";

function getStatusIcon(statusId) {
  switch (statusId) {
    case 4:
    case 7:
    case 5:
      return <img src={dataPendiente.status} alt={dataPendiente.title} />;
    case 6:
      return <img src={dataRevision.status} alt={dataRevision.title} />;
    case 8:
    case 10:
      return <img src={dataAprobado.status} alt={dataAprobado.title} />;
    case 9:
    case 12:
      return <img src={dataRechazado.status} alt={dataRechazado.title} />;
    default:
      return null;
  }
}

export default getStatusIcon;
