import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putProjects } from "../../../store/actions/projects.actions";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer,
  Hero,
  StyledValueField
} from "./EditProjectsForm.styles";
import { SignUpButtonContainer } from "../../sign-up-form/SignUpForm.styles";

const EditProjectsForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const userProjects = useSelector(state => state.values.userProjects)

  const { projToEdit } = useParams();

  const userProjects = JSON.parse(localStorage.getItem("userProjects"));

  useEffect(() => {
    const userProjects = JSON.parse(localStorage.getItem("userProjects"));
  }, [userProjects]);

  const handleClick = () => {
    const updatedValues = userProjects.map(val => {
      console.log(values);
      // console.log(id, val.id);
      const projToEdit = JSON.parse(localStorage.getItem("updatingProj"));
      if (val.id === projToEdit.id) {
        dispatch(
          putProjects({
            id: projToEdit.id,
            project: values.project || projToEdit.project,
            value: values.value || projToEdit.value
          })
        );
      } else {
        return val;
      }
    });
    history.push("/home");
    // localStorage.setItem("userProjects", JSON.stringify(updatedValues));
  };

  return (
    <>
      {/* <Sizer> */}
      {userProjects &&
        userProjects.map(val => {
          console.log(`This is val.id: `, val.id);
          if (val.id === parseInt(projToEdit)) {
            localStorage.setItem("updatingProj", JSON.stringify(val));
            // console.log(`This is updatingProj: `, val);
            return (
              <div key={val.id}>
                <FormContainer className="form">
                  <h4>
                    Remember, adding a new project means an existing one gets
                    less time.
                  </h4>

                  <StyledValueField
                    id="project"
                    className="input"
                    component="input"
                    type="text"
                    name="project"
                    placeholder={`You are working on ${val.project}`}
                  />
                  <StyledValueField
                    id="project"
                    className="input"
                    component="input"
                    type="text"
                    name="value"
                    placeholder={`Which aligns with ${val.value}`}
                  />
                  <Field
                    className="input"
                    component="input"
                    type="textarea"
                    name="notes"
                    placeholder={`These are your notes: ${val.notes}`}
                  />
                  {touched.notes && errors.notes && (
                    <p className="errors">{errors.notes}</p>
                  )}
                  <SignUpButtonContainer>
                    <ConfirmExplanationButton
                      onClick={() => handleClick()}
                      disabled={isSubmitting}
                    >
                      update
                    </ConfirmExplanationButton>
                  </SignUpButtonContainer>
                </FormContainer>
              </div>
            );
          }
        })}
      {/* </StyledSection> */}
      {/* </Sizer> */}
    </>
  );
};

export default withFormik({
  mapPropsToValues({ notes, project, value }) {
    const val = JSON.parse(localStorage.getItem("updatingProj"));
    return {
      project: project,
      notes: notes,
      value: value
    };
  },
  validationSchema: Yup.object().shape({
    notes: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditProjectsForm);
