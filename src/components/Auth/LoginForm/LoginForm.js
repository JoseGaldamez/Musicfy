import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { initialValues, validationSchema } from "./LoginForm.data";
import "./LoginForm.scss";
import { Auth } from "../../../api";

const auth = new Auth();

export const LoginForm = ({ changeForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      await auth.login(formValues.email, formValues.password);
    },
  });

  return (
    <div className="login-form" onSubmit={formik.handleSubmit}>
      <h1>Música para todos</h1>
      <Form>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electrónico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          icon={
            <Icon
              onClick={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye slash" : "eye"}
              link
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
          Iniciar sesión
        </Form.Button>
      </Form>
      <div className="login-form__options">
        <p onClick={() => changeForm(null)}>Volver</p>
        <p>
          ¿No tienes cuenta?{" "}
          <span onClick={() => changeForm("register")}>Regístrate</span>{" "}
        </p>
      </div>
    </div>
  );
};
