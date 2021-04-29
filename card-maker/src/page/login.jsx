import React from 'react';
import styles from './login.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Login = ({ user, handleSignIn, handleSignOut }) => {
  return (
    <div className={styles.background}>
      <section className={styles.outer}>
        <Header user={user} handleSignOut={handleSignOut} />
        <div className={styles.inner}>
          <h2 className={styles.title}>Login</h2>
          <button
            className={styles.button}
            onClick={() => handleSignIn('google')}
          >
            Google
          </button>
          <button
            className={styles.button}
            onClick={() => handleSignIn('github')}
          >
            Github
          </button>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Login;
