/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const SearchNoted = ({ handleSearch }) => {
  return (
    <section className="search-section">
      <label htmlFor="searchCatatanTitle">Judul</label>
      <input id="searchCatatanTitle" placeholder="Structure and Interpretation of Computer Programs .... " type="search" onChange={handleSearch} />
      <button id="searchSubmit" type="submit">
        Cari
      </button>
    </section>
  );
};
