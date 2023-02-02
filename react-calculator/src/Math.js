import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

const Math = () => {
  const { operation, num1, num2 } = useParams();
  const validOperations = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  };

  const symbol = validOperations[operation];

  let res;
  switch (symbol) {
    case "+":
      res = +num1 + +num2;
      break;
    case "-":
      res = +num1 - +num2;
      break;
    case "*":
      res = +num1 * +num2;
      break;
    case "/":
      res = +num1 / +num2;
      break;
    default:
      alert("something went wrong!");
  }

  if (!symbol || !parseFloat(num1) || !parseFloat(num2)) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="mt-5">
      <h1>Result:</h1>
      <h2>
        {num1} {symbol} {num2} = {res}
      </h2>
      <Link className="btn btn-warning mt-2" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default Math;
