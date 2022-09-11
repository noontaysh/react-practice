import React from "react";
import s from "./Nav.module.css";
import { NavLink, activeClassName } from "react-router-dom";

// let s = {}

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={(navData) => (navData.isActive ? s.activeLink : 'none')} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={(navData) => (navData.isActive ? s.activeLink : 'none')} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="#">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="#">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="#">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
