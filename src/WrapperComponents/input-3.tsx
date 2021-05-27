import React from "react";

export const Input = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};

export const UpperCaseInput = ({ value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value.toUpperCase())}
    />
  );
};
