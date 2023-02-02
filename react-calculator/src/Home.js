import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [form, updateForm] = useState({ operation: "add", num1: "", num2: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { value, name } = e.target;
    updateForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const { operation, num1, num2 } = form;
    if (operation === "divide" && (num1 === "0" || num2 === "0")) {
      alert("Are you crazy? No dividing by zero!");
      return;
    }
    navigate(`/${form.operation}/${form.num1}/${form.num2}`);
  };
  return (
    <>
      <h1 className="mt-5">React Router Calculator</h1>
      <p>
        Change the url to the name of an operation, and 2 numbers to do some
        math.
      </p>
      <p>{"format should be <operation>/<first number>/<second number>"}</p>
      <p>
        for example /add/10/10. Valid operations are add, subract, multiply, and
        divide
      </p>
      <p>or use the form below to navigate there.</p>
      <div className="mt-3">
        <form onSubmit={handleSumbit}>
          <div className="form-floating">
            <input
              type="number"
              id="num1"
              className="form-control"
              name="num1"
              placeholder="num1"
              required
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="num1">Num 1:</label>
          </div>

          <div class="form-floating mt-3">
            <select
              name="operation"
              id="operation"
              className="form-select"
              onChange={handleChange}
            >
              <option value="add">add</option>
              <option value="subtract">subtract</option>
              <option value="multiply">multiply</option>
              <option value="divide">divide</option>
            </select>
            <label htmlFor="operation">Operation:</label>
          </div>

          <div className="form-floating my-3">
            <input
              type="number"
              id="num2"
              className="form-control"
              name="num2"
              required
              placeholder="num2"
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="num2">Num 2:</label>
          </div>
          <button className="btn btn-warning">Do Math!</button>
        </form>
      </div>
    </>
  );
};

export default Home;
