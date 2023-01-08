import * as Yup from "yup";

const signUpSchema = Yup.object({
  organization: Yup.string().min(3).required("please enter organization"),
  program: Yup.string().min(3).required("please enter program"),
  pattern: Yup.string().required("please choose an option"),
});

export default signUpSchema;
