import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--border);
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.a`
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--white);
  text-decoration: none;
  flex-shrink: 0;
  z-index: 101;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.97);
    padding: 32px 24px;
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid var(--border);
  }
`;

const NavLink = styled.a`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--muted);
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  display: block;

  &:hover {
    color: var(--white);
  }

  &.active {
    color: var(--red);
    border-bottom-color: var(--red);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 18px 0;
    border-bottom: none;

    &.active {
      color: var(--red);
      border-bottom-color: transparent;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  z-index: 101;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LINKS = [
  { label: "Proyectos",       href: "#proyectos" },
  { label: "Contenido",       href: "#contenido" },
  { label: "Investigaciones", href: "#investigaciones" },
  { label: "Contacto",        href: "#contacto" },
];

const Nav = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <NavBar>
      <Logo href="#hero">PABLO TEDESCO</Logo>

      <Hamburger onClick={() => setOpen((o) => !o)} aria-label="Menú">
        <i className={`fa ${open ? "fa-times" : "fa-bars"}`} />
      </Hamburger>

      <NavLinks open={open}>
        {LINKS.map(({ label, href }) => (
          <NavItem key={href}>
            <NavLink
              href={href}
              className={active === href.slice(1) ? "active" : ""}
              onClick={handleLinkClick}
            >
              {label}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </NavBar>
  );
};

export default Nav;
