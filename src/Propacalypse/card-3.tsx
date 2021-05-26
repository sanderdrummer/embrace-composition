import React from "react";

export const Card = ({
  header,
  children,
  actionLabel,
  handleAction,
  image,
}) => {
  return (
    <div>
      {header ||
        (actionLabel && (
          <div>
            {header && <h1>{header}</h1>}
            {actionLabel && (
              <button onClick={handleAction}>{actionLabel}</button>
            )}
          </div>
        ))}
      {image && <img src={image} />}
      <div>{children}</div>
    </div>
  );
};
