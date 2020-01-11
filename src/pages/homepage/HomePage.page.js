import React from "react";
import { useSelector } from "react-redux";
import ValuesSelectionPage from "../values-selection/ValuesSelectionPage.component";
import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";
import ProjectList from "../../components/project-list/ProjectList.component";

import {
  StyledSection,
  StyledConfirmedValues,
  StyledProjectList
} from "./HomePage.styles";

function HomePage() {
  const localUserValues = JSON.parse(localStorage.getItem("userValues"));
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  if (confirmed) {
    return (
      confirmed && (
        <StyledSection>
          <StyledConfirmedValues /> <StyledProjectList />
        </StyledSection>
      )
    );
  } else {
    return (
      // <p>thinking</p>
      <ValuesSelectionPage />
    );
  }
}

export default HomePage;
