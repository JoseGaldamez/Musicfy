import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./TopBar.scss";

export const TopBar = () => {
  const navigation = useNavigate();

  const goBack = () => {
    navigation(-1);
  };

  const logOut = () => {
    console.log("log out");
  };

  return (
    <div className="top-bar">
      <Icon name="angle left" className="top-bar__back" link onClick={goBack} />
      <div className="top-bar__right">
        <Link to="/profile">
          {/* <Image /> */}
          <span>Username</span>
        </Link>
        <Icon name="power" onClick={logOut} link />
      </div>
    </div>
  );
};
