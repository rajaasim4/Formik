import React from "react";
import * as yup from "yup";
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/png",
  "image/jpeg",
  "image/webp",
];
let YupValidation = yup.object({
  firstName: yup
    .string()
    .min(3)
    .required("Rquired Please Enter the First Values"),
  lastName: yup
    .string()
    .min(3)
    .required("Rquired Please Enter the Last Values"),
  mobileNo: yup
    .number()
    .required("Rquired Please Enter the Mobile Number Values"),
  address: yup.string().required("Rquired Please Enter the Address"),
  email: yup.string().email().required("Rquired Please Enter the Email"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("Rquired Please Enter the Age"),
  //Basic Information
  matricMarks: yup
    .number()
    .positive()
    .integer()
    .required("Rquired Please Enter the Matric Marks"),
  obtainedMatricMarks: yup
    .number()
    .positive()
    .integer()
    .required("Rquired Please Enter the Obtained Marks"),
  interMarks: yup
    .number()
    .positive()
    .integer()
    .required("Rquired Please Enter the Inter Marks"),
  obtainedInterMarks: yup
    .number()
    .positive()
    .integer()
    .required("Rquired Please Enter the Obtained Marks"),
  education: yup.string().required("Rquired Please Enter the Education"),
  degree: yup.string().required("Rquired Please Enter the Degree"),
  semester: yup.string().required("Rquired Please Enter the Semester"),
  cgpa: yup.number().positive().required("Rquired Please Enter the CGPA"),
  //Confidential Information
  bankName: yup.string().required("Rquired Please Enter the Bank Name"),
  bankAccount: yup.mixed().required("Rquired Please Enter the Bank Account"),
  profileImg: yup
    .mixed()
    .required("Rquired Please Choose the Profile Image ")
    .test(
      "FILE_SIZE",
      "Upload file is too big,Max Upload Size 2MB",
      (value) => value && value.size <= 2000000
    )
    .test(
      "FILE_TYPE",
      "Upload file has unsupported format,Only Png,Jpg,Jpeg are Allowed",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  cnicImg: yup
    .mixed()
    .required("Rquired Please Choose the Profile Image ")
    .test(
      "FILE_SIZE",
      "Upload file is too big,Max Upload Size 2MB",
      (value) => value && value.size <= 2000000
    )
    .test(
      "FILE_TYPE",
      "Upload file has unsupported format,Only Png,Jpg,Jpeg are Allowed",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  matricResultCardImg: yup
    .mixed()
    .required("Rquired Please Choose the Profile Image ")
    .test(
      "FILE_SIZE",
      "Upload file is too big,Max Upload Size 2MB",
      (value) => value && value.size <= 2000000
    )
    .test(
      "FILE_TYPE",
      "Upload file has unsupported format,Only Png,Jpg,Jpeg are Allowed",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  interResultCardImg: yup
    .mixed()
    .required("Rquired Please Choose the Profile Image ")
    .test(
      "FILE_SIZE",
      "Upload file is too big,Max Upload Size 2MB",
      (value) => value && value.size <= 2000000
    )
    .test(
      "FILE_TYPE",
      "Upload file has unsupported format,Only Png,Jpg,Jpeg are Allowed",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),

  termsofservice: yup.boolean().required("Please Agree the terms of service"),
});
export default YupValidation;
