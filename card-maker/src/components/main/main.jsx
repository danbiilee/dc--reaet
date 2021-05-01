import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './main.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';

const Main = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService //
      .logout()
      .then(() => history.push('/'));
  };

  return (
    <div className={styles.main}>
      <Header onLogout={onLogout} />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
};

export default Main;
