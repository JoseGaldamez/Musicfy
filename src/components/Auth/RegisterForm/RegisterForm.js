import React from "react";
import { Button } from "semantic-ui-react";

export const RegisterForm = ({ changeForm }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>Register Form</h1>
      <Button primary onClick={() => changeForm("login")}>
        Login
      </Button>
      <Button secondary onClick={() => changeForm(null)}>
        Atrás
      </Button>
    </div>
  );
};
