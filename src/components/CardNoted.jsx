/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { showFormattedDate } from "../utils";
showFormattedDate;
export const CardNoted = ({ data, deleteCatatan, arsipCatatan, kembalikanCatatan }) => {
  return (
    <div key={data.id} className="card-catatan">
      <h3>{data.title}</h3>
      <span>{showFormattedDate(data.createdAt)}</span>
      <p>{data.body}</p>
      {!data.archived ? (
        <div className="action-catatan">
          <button className="delete" onClick={() => deleteCatatan(data.id)}>
            Hapus
          </button>
          <button onClick={() => arsipCatatan(data.id)}>Arsipkan</button>
        </div>
      ) : (
        <div className="action-catatan">
          <button className="delete" onClick={() => deleteCatatan(data.id)}>
            Hapus
          </button>
          <button onClick={() => kembalikanCatatan(data.id)}>Kembalikan</button>
        </div>
      )}
    </div>
  );
};
