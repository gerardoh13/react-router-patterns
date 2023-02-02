import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [form, updateForm] = useState({ colorName: "", hex: "#ffffff" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = { [form.colorName]: form.hex };
    console.log(newColor);
    addColor((prev) => ({ ...prev, ...newColor }));
    navigate("/colors");
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    updateForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="Color rainbowDiv">
      <div className="ctrlDiv m-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="color"
              name="colorName"
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="color">Name:</label>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="hex">Color:</label>
            </div>
            <div className="col">
              <input
                className="form-control"
                type="color"
                name="hex"
                id="hex"
                value={form.hex}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="btn btn-secondary my-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NewColorForm;
