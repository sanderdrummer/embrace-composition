import React from "react";
interface LinkItem {
  label: string;
  href: string;
}

export const MainApp = () => {
  const navConfig: LinkItem[] = [
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

export interface MovieAppNavbarConfig {
  items: LinkItem[];
}

export const Navbar: React.FC<MovieAppNavbarConfig> = ({ items }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        })}
      </div>
    </div>
  );
};
