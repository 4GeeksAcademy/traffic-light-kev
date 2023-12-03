import React, { useState } from "react";
import "./semaforo.css";

const Semaforo = () => {
  const [active, setActive] = useState();

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="palito"></div>
      <div className="cuerpo ">
        <div
          className={`rojo ${active == "rojo" ? "ligth-red" : ""}`}
          onClick={() => setActive("rojo")}
        ></div>
        <div
          className={`amarillo ${active == "amarillo" ? "ligth-yellow" : ""}`}
          onClick={() => setActive("amarillo")}
        ></div>
        <div
          className={`verde ${active == "verde" ? "ligth-green" : ""}`}
          onClick={() => setActive("verde")}
        ></div>
      </div>
    </div>
  );
};

export default Semaforo;
