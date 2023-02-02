import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";

const Color = ({ colors }) => {
  const { color } = useParams();
  const hex = colors[color];

if (!hex) {
  return <Navigate to="/colors" replace />;
}
  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <div className="ctrlDiv m-auto">
        <p>This is {color}</p>
        <p>Isn't it beautiful?</p>
        <Link className="nav-link" to="/colors">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Color;
