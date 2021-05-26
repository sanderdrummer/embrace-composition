import React from "react";

interface TitleItem {
  title: string;
}

interface LinkItem {
  label: string;
  href: string;
}

export interface MovieAppNavbarConfig {
  items: (TitleItem | LinkItem)[];
}

export const MainApp = () => {
  const navConfig: (TitleItem | LinkItem)[] = [
    { title: "AwesomeApp" },
    { href: "/feature-1", label: "Feature" },
    { href: "/feature-2", label: "Another Feature" },
  ];

  return (
    <>
      ...
      <Navbar items={navConfig} />
      ...
    </>
  );
};

export const Navbar: React.FC<MovieAppNavbarConfig> = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        {items.map((item) => {
          if ("title" in item) {
            return (
              <h1
                style={{
                  color: "#fff",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </h1>
            );
          }
          return null;
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {items.map((item) => {
          if ("label" in item) {
            return (
              <a
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
                href={item.href}
              >
                {item.label}
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
