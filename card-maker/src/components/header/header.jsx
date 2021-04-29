import React from 'react';
import styles from './header.module.css';

const Header = ({ user, handleSignOut }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
      {user && (
        <button className={styles.button} onClick={handleSignOut}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
