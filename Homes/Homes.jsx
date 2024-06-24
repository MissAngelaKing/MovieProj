import React, { useState, useEffect } from "react";
import "./home.css";
import Home from "./Home";

const Homes = ({ items }) => {
  return (
    <>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Homes;
