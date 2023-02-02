import React from "react";
import { useParams, Navigate } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const currDog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!currDog) {
    return <Navigate to="/dogs" replace />;
  }
  return (
    <div className="mt-5">
      <h1>{currDog.name}</h1>
      <img src={currDog.src} alt={currDog.name} />
      <p className="mt-3">
        {currDog.name} is {currDog.age} years old!
      </p>
      <ul>
        {currDog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
