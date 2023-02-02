import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function ColorRoutes() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "red",
    blue: "blue",
    green: "green",
  };

  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors/" element={<ColorList colors={colors} />} />
        <Route
          exact
          path="/colors/new"
          element={<NewColorForm addColor={updateColors} />}
        />
        <Route path="/colors/:color" element={<Color colors={colors}/>} />
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ColorRoutes;
