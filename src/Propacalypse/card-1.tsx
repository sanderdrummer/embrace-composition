import React from "react";

export const Card = ({ header, children }) => {
  return (
    <div>
      <div>
        <h1>{header}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};
