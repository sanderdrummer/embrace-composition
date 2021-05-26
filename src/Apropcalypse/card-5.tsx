import React from "react";

export const Card = ({ children }) => {
  return <div>{children}</div>;
};

export const CardHeader = ({ children, action }) => {
  return (
    <div>
      {children}
      <div>{action}</div>
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

export const CardImage = ({ src, alt }) => {
  return <img src={src} alt={alt}></img>;
};

const MyCard = () => {
  return (
    <Card>
      <CardImage
        src="image.jpg"
        alt="picture of a guy ranting about how awesome composition is"
      />
      <CardHeader action={<button>sdfsd</button>}>
        <h2>Hello World</h2>
      </CardHeader>
      <CardContent>Aweseome content</CardContent>
    </Card>
  );
};
