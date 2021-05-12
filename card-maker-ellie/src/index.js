import React, { memo } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ImageFileInput from "./components/image_file_input/image_file_input";
import "./index.module.css";
import AuthService from "./service/auth_service";
import CardRepository from "./service/card_repository";
import ImageUploader from "./service/image_uploader";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
