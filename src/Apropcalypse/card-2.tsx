import React from "react";

export const Card = ({ header, children, actionLabel, handleAction }) => {
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

      <div>{children}</div>
    </div>
  );
};
