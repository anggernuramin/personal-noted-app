/* eslint-disable no-unused-vars */
import React from "react";
import ImageHome from "../assets/head-bar-image.png";

export const Header = () => {
  return (
    <header>
      <div className="container wrapper-head-bar">
        <div className="head-bar-image">
          <img src={ImageHome} alt="header image" />
        </div>
        <div className="head-bar-content">
          <h1>Noted Apps</h1>
          <p>Mengelola catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan.</p>
        </div>
        <span className="watermark">By Angger Nur Amin</span>
      </div>
    </header>
  );
};
