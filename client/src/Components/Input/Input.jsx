import React from "react";

const Input = ({ type, id, name, onChange, label }) => {
  return (
    <div>
      <label>{label}</label>

      <input type={type} id={id} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;
