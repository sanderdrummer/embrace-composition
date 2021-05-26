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
  return (
    <>
      ...
      <Navbar>
        <NavbarTitle>Awesome App</NavbarTitle>
        <div>
          <NavbarItem href={"/feature-1"}>Feature</NavbarItem>
          <NavbarItem href={"/feature-1"}>Feature</NavbarItem>
          <div style={{ color: "white" }} onClick={() => setOpen(true)}>
            {"search-icon"}
          </div>
        </div>
      </Navbar>
      ...
    </>
  );
};

export const NavbarTitle = ({ children }) => {
  return (
    <h1
      style={{
        color: "#fff",
        fontSize: "30px",
        fontWeight: "bold",
      }}
    >
      {children}
    </h1>
  );
};

export const NavbarItem = ({ children, href }) => {
  return (
    <a
      style={{
        color: "#fff",
        fontWeight: "bold",
        marginRight: "1rem",
      }}
      href={href}
    >
      {children}
    </a>
  );
};

export const Navbar: React.FC = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {children}
    </div>
  );
};
