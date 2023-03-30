import React from "react";

const SelectGradients = ({ gradient, setGradient }) => {
  return (
    <div className="select-gradient-wrapper">
      <div
        style={
          gradient === "linear"
            ? { backgroundColor: "#0073c4", color: "white" }
            : { backgroundColor: "#e4e4e4" }
        }
        className="select-gradient-linear"
        onClick={() => setGradient("linear")}
      >
        <span>Linear</span>
      </div>
      <div
        style={
          gradient === "radial"
            ? { backgroundColor: "#0073c4", color: "white" }
            : { backgroundColor: "#e4e4e4" }
        }
        className="select-gradient-radial"
        onClick={() => setGradient("radial")}
      >
        <span>Radial</span>
      </div>
      <div
        style={
          gradient === "conic"
            ? { backgroundColor: "rgb(30,144,255)", color: "white" }
            : { backgroundColor: "#e4e4e4" }
        }
        className="select-gradient-conic"
        onClick={() => setGradient("conic")}
      >
        <span>Conic</span>
      </div>
    </div>
  );
};

export default SelectGradients;
