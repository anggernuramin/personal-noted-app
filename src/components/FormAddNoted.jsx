/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export const FormAddNoted = ({ addCatatan }) => {
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [errorInput, setErrorInput] = useState("");

  useEffect(() => {
    setErrorInput(`Sisa karakter: 50`);
  }, []);

  function handleInput(e) {
    const value = e.target.value;

    if (value.length < 50) {
      setTitle(value);
    }
    setErrorInput(`Sisa karakter: ${50 - value.length}`);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (title && deskripsi) {
      addCatatan({ title, deskripsi });
      setTitle("");
      setDeskripsi("");
    }
  }
  return (
    <section className="wrapper-input-section">
      <div className="input-section">
        <h2>Buat catatan</h2>
        <form id="inputCatatan" onSubmit={handleFormSubmit}>
          <div className="input">
            <div className="label-judul">
              <label htmlFor="inputCatatanTitle">Judul</label>
              <span>{errorInput}</span>
            </div>
            <input id="inputCatatanTitle" autoFocus type="text" required placeholder="Tulis judul catatan" value={title} onChange={handleInput} />
          </div>
          <div className="input">
            <label htmlFor="inputCatatanCatatan">Catatan</label>
            <textarea name="catatan" id="inputCatatanCatatan" required placeholder="Tulis catatan Anda disini" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
          </div>

          <button id="CatatanSubmit" type="submit">
            Buat
          </button>
        </form>
      </div>
    </section>
  );
};
