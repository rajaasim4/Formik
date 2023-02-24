import { ErrorMessage, Field } from "formik";
import React from "react";
import { RiCloseCircleFill } from "react-icons/all";
const FormikCompoent = (props) => {
  const { formikname, name, type, as } = props;
  return (
    <>
      <div className="form-input">
        <label htmlFor={formikname}>{name}</label>
        <Field name={formikname} type={type} id={formikname} />
        <ErrorMessage name={formikname}>
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
    </>
  );
};

export default FormikCompoent;
