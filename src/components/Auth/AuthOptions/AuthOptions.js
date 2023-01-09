import React from "react";
import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export const AuthOptions = ({ changeForm }) => {
  return (
    <div className="auth-options">
      <h1>Millones de canciones gratis en Musicfy</h1>

      <Button
        className="register"
        onClick={() => {
          changeForm("register");
        }}
      >
        Regístrate gratis
      </Button>
      <Button
        className="login"
        onClick={() => {
          changeForm("login");
        }}
      >
        Inicia sesión
      </Button>
    </div>
  );
};
