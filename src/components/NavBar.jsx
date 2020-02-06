import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styling/NavBar.module.css";

const NavBar = props => {
  return (
    <main>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/articles/coding">
              Coding
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/articles/cooking">
              Cooking
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/articles/football">
              Football
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;
