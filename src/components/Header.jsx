import "./Header.css";
import { Component } from "react";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#/premium">Premium</a>
          </li>
          <li>
            <a href="#/support">Support</a>
          </li>
          <li>
            <a href="#/download">Download</a>
          </li>
          <li>|</li>
          <li className="active">
            <a href="#/signup">Signup</a>
          </li>
          <li className="active">
            <a href="#/log in">Log in</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
