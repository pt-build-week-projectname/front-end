import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getZen } from "../../store/actions/zen.quotes.actions";

import {
  SignUpButtonContainer,
  SignUpLinkLogin
} from "../../components/sign-up-form/SignUpForm.styles";
import { LoginLinkSignUp } from "../../components/login-form/LoginForm.styles";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn
} from "../../globals/styles";

const Banner = ({ className, quote, getZen }) => {
  useEffect(() => {
    getZen();
  }, []);

  return (
    <div className={className}>
      <SignUpButtonContainer>
        <SignUpLinkLogin to="/in">Log In</SignUpLinkLogin>
        <LoginLinkSignUp to="/up">Sign Up</LoginLinkSignUp>
      </SignUpButtonContainer>
      <h3>
        Remember <span>{quote}</span>{" "}
      </h3>
      <div className="info"></div>
    </div>
  );
};
const BannerWrapper = styled(Banner)`
  background: ${setColor.mainLight};
  margin: 60% auto 0;

  text-align: center;
  justify-content: center;
  padding: ${setRem(10)} ${setRem(10)};
  ${setLetterSpacing(3)}
  h3 {
    text-transform: uppercase;
    font-size: ${setRem(48)};
    span {
      text-transform: capitalize;
      color: ${setColor.offWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    p {
      width: 75%;
    }`}

  h3 {
    ${fadeIn("100%", "-10%", "0")}
  }
  .info {
    ${fadeIn("-100%", "10%", "0")}
  }
`;

const mapStateToProps = state => {
  console.log(
    `BannerWrapper.component.js: mapStateToProps: state.zen: `,
    state.zen
  );
  return {
    quote: state.zen.quote,
    isLoading: state.zen.isLoading
  };
};

export default connect(mapStateToProps, { getZen })(BannerWrapper);
