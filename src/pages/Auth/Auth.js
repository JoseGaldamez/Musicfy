import React, { useState } from "react";
import { AuthOptions, RegisterForm, LoginForm } from "../../components/Auth";
import { Image } from "semantic-ui-react";
import { logoNameWhite } from "../../assets";
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

  return (
    <div className="auth">
      <div className="auth__content">
        <Image
          src={logoNameWhite}
          alt="Musicfy"
          className="auth__content-logo"
        />

        {renderForm()}
      </div>
    </div>
  );
};
