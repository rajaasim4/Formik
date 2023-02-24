import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import { RiCloseCircleFill } from "react-icons/all";
import FormIkData from "../Data/FormIkData";
import FormikCompoent from "./FormikCompoent";
import InitialValues from "./InitialValues";
import PreviewImage from "./PreviewImage";
import YupValidation from "./YupValidation";

const FormIkContainer = () => {
  let onSubmit = (values, onSubmitProps) => {
    alert("Form has Submitted");
    console.log(values);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    }, 4000);
  };
  return (
    <>
      <div className="Container">
        <h1>Welcome to the Scholarship Form</h1>
        <Formik
          initialValues={InitialValues}
          onSubmit={onSubmit}
          validationSchema={YupValidation}
        >
          {(formik) => {
            return (
              <Form>
                <fieldset>
                  <legend>Personal Details</legend>
                  {FormIkData.map((val, index) => {
                    return (
                      <Fragment key={index}>
                        <FormikCompoent {...val} />
                      </Fragment>
                    );
                  })}
                  <div className="form-input">
                    <label htmlFor="">Upload Profile Image</label>
                    <input
                      type="file"
                      name="profileImg"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "profileImg",
                          event.target.files[0]
                        );
                      }}
                    />
                    {formik.values.profileImg && (
                      <PreviewImage file={formik.values.profileImg} />
                    )}
                    {formik.touched.profileImg && formik.errors.profileImg ? (
                      <small>{formik.errors.profileImg}</small>
                    ) : null}
                  </div>

                  <div className="form-input">
                    <label htmlFor="">Upload CNIC Image</label>
                    <input
                      type="file"
                      name="cnicImg"
                      onChange={(event) => {
                        formik.setFieldValue("cnicImg", event.target.files[0]);
                      }}
                    />
                    {formik.values.cnicImg && (
                      <PreviewImage file={formik.values.cnicImg} />
                    )}
                    {formik.touched.cnicImg && formik.errors.cnicImg ? (
                      <small>{formik.errors.cnicImg}</small>
                    ) : null}
                  </div>
                  <div className="form-input">
                    <label htmlFor="">Upload Matric Result Card</label>
                    <input
                      type="file"
                      name="matricResultCardImg"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "matricResultCardImg",
                          event.target.files[0]
                        );
                      }}
                    />
                    {formik.values.matricResultCardImg && (
                      <PreviewImage file={formik.values.matricResultCardImg} />
                    )}
                    {formik.touched.matricResultCardImg &&
                    formik.errors.matricResultCardImg ? (
                      <small>{formik.errors.matricResultCardImg}</small>
                    ) : null}
                  </div>
                  <div className="form-input">
                    <label htmlFor="">Upload Inter Result Card</label>
                    <input
                      type="file"
                      name="interResultCardImg"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "interResultCardImg",
                          event.target.files[0]
                        );
                      }}
                    />
                    {formik.values.interResultCardImg && (
                      <PreviewImage file={formik.values.interResultCardImg} />
                    )}
                    {formik.touched.interResultCardImg &&
                    formik.errors.interResultCardImg ? (
                      <small>{formik.errors.interResultCardImg}</small>
                    ) : null}
                  </div>
                  <div className="form-input check-box">
                    <Field type="checkbox" name="termsofservice" />
                    <p>
                      You agree to our Terms, Privacy Policy and Cookies Policy.
                    </p>
                    <ErrorMessage name="termsofservice">
                      {(errorMsg) => {
                        return (
                          <>
                            <small>
                              <span>
                                <RiCloseCircleFill />
                              </span>
                              {errorMsg}
                            </small>
                          </>
                        );
                      }}
                    </ErrorMessage>
                  </div>

                  <button type="submit" disabled={formik.onSubmitProps}>
                    Submit
                  </button>
                </fieldset>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default FormIkContainer;
