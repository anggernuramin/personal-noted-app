/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CardNoted } from "./CardNoted";
CardNoted;

export const CatatanArsip = ({ searchResult, datas, kembalikanCatatan, deleteCatatan }) => {
  return (
    <>
      <h2>Diarsipkan</h2>
      <section className="Catatan-shelf">
        {searchResult.length > 0
          ? searchResult.map((item) => {
              if (item.archived) {
                return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} kembalikanCatatan={kembalikanCatatan} />;
              }
            })
          : datas.map((item) => {
              if (item.archived) {
                return <CardNoted key={item.id} data={item} deleteCatatan={deleteCatatan} kembalikanCatatan={kembalikanCatatan} />;
              }
            })}
        {datas.every((item) => item.archived === false) && <p>Tidak ada catatan yang Diarsipkan</p>}
      </section>
    </>
  );
};
