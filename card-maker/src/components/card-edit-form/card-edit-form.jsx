import React from 'react';
import Button from '../button/button';
import styles from './card-edit-form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    position,
    email,
    message,
    theme,
    fileName,
    fileUrl,
  } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="position"
        value={position}
      />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
