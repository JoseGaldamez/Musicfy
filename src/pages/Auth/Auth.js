import React, { useState } from "react";
import { AuthOptions, RegisterForm, LoginForm } from "../../components/Auth";
import "./Auth.scss";

export const Auth = () => {
  const [typeForm, setTypeForm] = useState(null);

  const changeForm = (type) => {
    setTypeForm(type);
  };

  const renderForm = () => {
    switch (typeForm) {
      case "login":
        return <LoginForm changeForm={changeForm} />;
      case "register":
        return <RegisterForm changeForm={changeForm} />;
      default:
        return <AuthOptions changeForm={changeForm} />;
    }
  };

  return <div>{renderForm()}</div>;
};
