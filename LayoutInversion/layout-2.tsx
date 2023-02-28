import React from "react";

const SomeButton = () => {
  return <button> hi there </button>;
};

const SomeOtherButton = () => {
  return <button style={{ marginLeft: "1rem" }}> other button </button>;
};

export const ButtonContainer = () => {
  <div style={{ display: "flex" }}>
    <SomeButton />
    <SomeOtherButton />
  </div>;
};
