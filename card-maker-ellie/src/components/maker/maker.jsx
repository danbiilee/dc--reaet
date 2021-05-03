import React, { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom/cjs/react-dom.development';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      position: 'Software Engineer',
      email: 'dream.coder.elli@gmail.com',
      message: 'Dont forget to code your dream',
      fileName: 'ellie',
      fileUrl: null,
    },
    2: {
      id: 2,
      name: 'Ash',
      company: 'Uber',
      theme: 'light',
      position: 'Senior Software Engineer',
      email: 'ash@gmail.com',
      message: 'I love coding',
      fileName: 'ash',
      fileUrl: null,
    },
    3: {
      id: 3,
      name: 'Danbi',
      company: 'Instagram',
      theme: 'colorful',
      position: 'Front-end Developer',
      email: 'danbi.db@gmail.com',
      message: 'Design your dream',
      fileName: 'danbi',
      fileUrl: null,
    },
  });

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      !user && history.push('/');
    });
  });

  // add와 update할 때의 처리가 동일
  const createOrUpdateCard = card => {
    // ⚡ setCards 함수를 호출하는 시점의 최신 cards state를 받아와서 업데이트
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
