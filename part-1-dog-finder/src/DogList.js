import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  const links = dogs.map((dog) => {
    return (
      <Link
        className="nav-link dogLinks"
        key={dog.name}
        to={`/dogs/${dog.name.toLowerCase()}`}
      >
        {dog.name}
        <img className="thumbnail my-3 ms-2" src={dog.src} alt={dog.name} />
      </Link>
    );
  });
  return (
    <>
      <h2 className="mt-4">Check out these cool dogs!</h2>
      {links}
    </>
  );
};

export default DogList;
