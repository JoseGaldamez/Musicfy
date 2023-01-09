import React from "react";
import { Button } from "semantic-ui-react";

export const LoginForm = ({ changeForm }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>Login Form</h1>
      <Button primary onClick={() => changeForm("register")}>
        Register
      </Button>
      <Button secondary onClick={() => changeForm(null)}>
        Atrás
      </Button>
    </div>
  );
};
