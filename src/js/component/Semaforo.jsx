import React, { useState } from "react";
import "./semaforo.css";

const Semaforo = () => {
  const [active, setActive] = useState();
  const [newColor, setNewColor] = useState();

  function changeColor() {
    if (active == undefined) {
      setActive("rojo");
    } else if (active == "rojo") {
      setActive("amarillo");
    } else if (active == "amarillo") {
      setActive("verde");
    } else if (active == "verde" && newColor) {
      setActive("azul");
    } else if (active == "azul") {
      setActive("rojo");
    } else {
      setActive("rojo");
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center ">
      <div className="palito"></div>
      <div className="cuerpo mb-5">
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

        {newColor ? (
          <div
            className={`azul ${active == "azul" ? "ligth-blue" : ""}`}
            onClick={() => setActive("azul")}
          ></div>
        ) : (
          ""
        )}
      </div>
      <div className="d-flex gap-5">
        <button className="btn btn-success" onClick={() => changeColor()}>
          Change colors
        </button>
        <button
          className="btn btn-warning px-4"
          onClick={() => setNewColor(true)}
        >
          New Color
        </button>
        <button
          className="btn btn-danger px-4"
          onClick={() => setNewColor(false)}
        >
          Delete Color
        </button>
      </div>
    </div>
  );
};

export default Semaforo;
