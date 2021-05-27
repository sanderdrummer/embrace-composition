import React from "react";

export const Input = ({ value, onChange, doUpperCase }) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        if (doUpperCase) {
          onChange(e.target.value.toUpperCase());
        } else {
          onChange(e.target.value);
        }
      }}
    />
  );
};
