import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push('/maker', { id: userId });
  };

  const onLogin = e => {
    authService //
      .login(e.currentTarget.textContent)
      .then(result => goToMaker(result.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    });
  });

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
