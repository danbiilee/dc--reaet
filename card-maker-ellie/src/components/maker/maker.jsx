import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      position: "Software Engineer",
      email: "dream.coder.elli@gmail.com",
      message: "Dont forget to code your dream",
      fileName: "ellie",
      fileUrl: null,
    },
    {
      id: 2,
      name: "Ash",
      company: "Uber",
      theme: "light",
      position: "Senior Software Engineer",
      email: "ash@gmail.com",
      message: "I love coding",
      fileName: "ash",
      fileUrl: null,
    },
    {
      id: 3,
      name: "Danbi",
      company: "Instagram",
      theme: "colorful",
      position: "Front-end Developer",
      email: "danbi.db@gmail.com",
      message: "Design your dream",
      fileName: "danbi",
      fileUrl: null,
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && history.push("/");
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
