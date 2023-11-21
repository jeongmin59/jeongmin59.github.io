import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div className={styles.navItem}>
        <button onClick={() => navigateTo("/")}>Home</button>
        <button onClick={() => navigateTo("/about")}>About</button>
        <button onClick={() => navigateTo("/contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
