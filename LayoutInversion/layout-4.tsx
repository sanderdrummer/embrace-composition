import React from "react";

const SomeButton = () => {
  return <button> hi there </button>;
};

const SomeOtherButton = () => {
  return <button> other button </button>;
};

export const ButtonContainer = () => {
  <div style={{ display: "flex", gap: "1rem" }}>
    <SomeButton />
    <SomeOtherButton />
  </div>;
};

export const SomeOtherButtonContainer = () => {
  <div style={{ display: "grid", gap: "1rem" }}>
    <SomeOtherButton />
    <SomeButton />
  </div>;
};
