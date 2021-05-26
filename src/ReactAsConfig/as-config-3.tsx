import React, { useState } from "react";

interface TitleItem {
  title: string;
}

interface LinkItem {
  label: string;
  href: string;
}

interface SearchItem {
  icon: any;
  onClick: () => void;
}

export interface MovieAppNavbarConfig {
  items: (TitleItem | LinkItem | SearchItem)[];
}

export const MainApp = () => {
  const [open, setOpen] = useState(false);
  const navConfig: (TitleItem | LinkItem | SearchItem)[] = [
    { title: "Awesome App" },
    { href: "/feature-1", label: "Feature" },
    { href: "/feature-2", label: "Another Feature" },
    {
      icon: "search-icon",
      onClick: () => {
        setOpen((open) => !open);
      },
    },
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
          if ("icon" in item) {
            return (
              <div style={{ color: "white" }} onClick={item.onClick}>
                {item.icon}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
