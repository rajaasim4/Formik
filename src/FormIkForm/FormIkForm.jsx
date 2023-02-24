import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import FormikCompoent from "./FormikCompoent";

const FormIkForm = () => {
  const initialValues = {
    //Personal Informatino
    firstName: "",
    lastName: "",
    mobileNo: "",
    address: "",
    email: "",
    age: "",
    //Basic Information
    matricMarks: "",
    obtainedMatricMarks: "",
    interMarks: "",
    obtainedInterMarks: "",
    education: "",
    degree: "",
    semester: "",
    cgpa: "",
    //Confidential Information
    bankName: "",
    bankAccount: "",
    profile: "",
    cnic: "",
    matricResultCard: "",
    interResultCard: "",
  };
  return (
    <>
      <div className="Container">
        <h1>Scholarship Ship Form</h1>
        <Formik initialValues={initialValues}>
          {(formik) => {
            return (
              <Form>
                {/* Personal Information */}
                <fieldset>
                  <legend>Personal Information</legend>
                  {/* <FormikCompoent
                    name={initialValues.personalInformation.firstName}
                    id="firstName"
                  /> */}
                  <div className="form-input">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      name="personalInformation.firstName"
                      id="firstName"
                    />
                    <ErrorMessage name="personalInformation.firstName">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      name="personalInformation.lastName"
                      id="lastName"
                    />
                    <ErrorMessage name="personalInformation.lastName">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="mobileNo">Mobile No</label>
                    <Field
                      type="text"
                      name="personalInformation.mobileNo"
                      id="mobileNo"
                    />
                    <ErrorMessage name="personalInformation.mobileNo">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="address">Address</label>
                    <Field
                      type="text"
                      name="personalInformation.address"
                      id="address"
                    />
                    <ErrorMessage name="personalInformation.address">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      name="personalInformation.email"
                      id="email"
                    />
                    <ErrorMessage name="personalInformation.email">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="age">Age</label>
                    <Field
                      type="text"
                      name="personalInformation.age"
                      id="age"
                    />
                    <ErrorMessage name="personalInformation.age">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </fieldset>
                <br />
                <br />
                <fieldset>
                  <legend>Basic Information</legend>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="matricMarks">Age</label>
                    <Field
                      type="text"
                      name="basicInformation.matricMarks"
                      id="matricMarks"
                    />
                    <ErrorMessage name="basicInformation.matricMarks">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>{errorMsg}</small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>
                </fieldset>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default FormIkForm;
