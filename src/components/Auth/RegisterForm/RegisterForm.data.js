import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    username: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true).min(6, true),
    username: Yup.string().required(true),
  });
};
