import React from "react";

const Input = ({ type ,name, error, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}  
    </div>
  );
};

export default Input;
