import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styling/NavBar.module.css";

const NavBar = ({ user, users, selectUser }) => {
  return (
    <main>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <p className={styles.title}>COSMIC NEWS</p>
          <img
            src="http://clipart-library.com/images/ziXobeE7T.png"
            height="42"
            width="42"
            className={styles.flower}
            alt="flower"
          />
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              HOME
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/articles/coding">
              CODING
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/articles/cooking">
              COOKING
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/articles/football">
              FOOTBALL
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
