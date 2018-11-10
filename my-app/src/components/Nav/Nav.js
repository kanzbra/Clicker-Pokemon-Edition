import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Pokémon Clicky Game</a>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Poké Score: {props.score} | Top Poké Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
