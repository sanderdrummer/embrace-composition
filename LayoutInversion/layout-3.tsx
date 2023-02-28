import React from "react";

const SomeButton = () => {
  return <button> hi there </button>;
};

const SomeOtherButton = ({ style = {} }) => {
  return (
    <button style={{ marginLeft: "1rem", ...style }}> other button </button>
  );
};

export const ButtonContainer = () => {
  <div style={{ display: "flex" }}>
    <SomeButton />
    <SomeOtherButton />
  </div>;
};

export const SomeOtherButtonContainer = () => {
  <div>
    <SomeOtherButton
      style={{
        marginLeft: 0,
      }}
    />
    <SomeButton />
  </div>;
};
