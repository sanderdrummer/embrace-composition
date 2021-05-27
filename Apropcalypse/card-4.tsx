import React from "react";

export const Card = ({
  header,
  children,
  actionLabel,
  handleAction,
  image,
  imagePosition = "center",
}) => {
  return (
    <div>
      {image && imagePosition === "top" && <img src={image} />}
      {header ||
        (actionLabel && (
          <div>
            {header && <h1>{header}</h1>}
            {actionLabel && (
              <button onClick={handleAction}>{actionLabel}</button>
            )}
          </div>
        ))}
      {image && imagePosition === "center" && <img src={image} />}
      <div>{children}</div>
      {image && imagePosition === "bottom" && <img src={image} />}
    </div>
  );
};
