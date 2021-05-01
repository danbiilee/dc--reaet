import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  const history = useHistory();

  const onLogin = e => {
    authService //
      .login(e.currentTarget.textContent)
      .then(() => history.push('/app'));
  };

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
