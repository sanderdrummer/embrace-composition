import React from "react";

const SomeButton = () => {
  return <button> hi there </button>;
};

const SomeOtherButton = () => {
  return <button> other button </button>;
};

export const ButtonContainer = () => {
  <div style={{ display: "flex" }}>
    <SomeButton />
    <SomeOtherButton />
  </div>;
};
