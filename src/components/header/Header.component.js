import React from "react";
import { connect } from "react-redux";

import { StyledHeader } from "./Header.styles";
import { LogOutButton } from "../login-logout-links/LogoutLink.component";

function Header({ welcome }) {
  console.log(`Header.js: welcome: `, welcome);
  localStorage.setItem("welcome", JSON.stringify(welcome));
  const localWelcome = JSON.parse(localStorage.getItem("welcome"));

  return (
    <StyledHeader>
      <p>{welcome || localWelcome}</p>
      <LogOutButton onClick={() => localStorage.clear("token")}>
        Log Out
      </LogOutButton>
    </StyledHeader>
  );
}

const mapPropsToState = state => {
  console.log(`Header.js: mapPropsToState: state: `, state);
  return {
    welcome: state.login.welcome
  };
};

export default connect(mapPropsToState)(Header);
