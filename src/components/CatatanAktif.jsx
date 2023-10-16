/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CardNoted } from "./CardNoted";

export const CatatanAktif = ({ searchResult, datas, arsipCatatan, deleteCatatan }) => {
  return (
    <>
      <h2>Catatan aktif</h2>
      <section className="Catatan-shelf">
        {searchResult.length > 0
          ? searchResult.map((item) => {
              if (item.archived === false) {
                return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} arsipCatatan={arsipCatatan} />;
              }
            })
          : datas.map((item) => {
              if (item.archived === false) {
                return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} arsipCatatan={arsipCatatan} />;
              }
            })}

        {datas.every((item) => item.archived) && <p>Tidak ada catatan</p>}
      </section>
    </>
  );
};
