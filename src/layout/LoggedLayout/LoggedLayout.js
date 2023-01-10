import React from "react";
import "./LoggedLayout.scss";

export const LoggedLayout = ({ children }) => {
  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <p>LEFT MENU</p>
        </div>
        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">TOPBAR</div>
          <div>{children}</div>
        </div>
      </div>
      <div className="logged-layout__footer">Footer</div>
    </div>
  );
};
