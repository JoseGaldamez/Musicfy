import React from "react";
import { Button } from "semantic-ui-react";

export const AuthOptions = ({ changeForm }) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <h1>Auth Options</h1>
      <Button
        primary
        onClick={() => {
          changeForm("login");
        }}
      >
        Login
      </Button>
      <Button
        secondary
        onClick={() => {
          changeForm("register");
        }}
      >
        Registro
      </Button>
    </div>
  );
};
