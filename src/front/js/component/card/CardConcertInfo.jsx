import React from "react";

export const CardConcertInfo = ({
  fechaConcierto,
  horaConcierto,
  ubicacionConcierto,
  nombreArtistaConcierto,
}) => {
  return (
    <div className="card-body">
      <h5 className="card-title text-secondary">
        <strong>{nombreArtistaConcierto}</strong>
      </h5>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">{fechaConcierto}</li>
        <li className="list-group-item">{horaConcierto}</li>
        <li className="list-group-item">{ubicacionConcierto}</li>
      </ul>
    </div>
  );
};
