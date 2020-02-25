import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styling/NavBar.module.css";

const NavBar = ({ user, users, selectUser }) => {
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
      <section>
        <p>Logged in: {user}</p>
        <p>
          Select User:
          <select onChange={({ target: { value } }) => selectUser(value)}>
            {users.map(user => {
              return <option key={user}>{user}</option>;
            })}
          </select>
        </p>
      </section>
    </main>
  );
};

export default NavBar;
