import React from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";

import "./RegisterForm.scss";

export const RegisterForm = ({ changeForm }) => {
  const formik = useFormik({
    validationSchema: validationSchema(),
    validateOnChange: false,
    initialValues: initialValues(),
    onSubmit: (formValue) => {},
  });

  return (
    <div className="register-form">
      <h1>Comienza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Correo electrónico"
          type="text"
          icon="mail outline"
          error={formik.errors.email}
        />

        <Form.Input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Contraseña"
          type="password"
          icon={
            <Icon
              name="eye"
              link
              onClick={() => console.log("Show password")}
            />
          }
          error={formik.errors.password}
        />

        <Form.Input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="Cómo deberíamos llamarte"
          type="text"
          icon="user circle outline"
          error={formik.errors.username}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Continuar
        </Form.Button>
      </Form>

      <div className="register-form__options">
        <p onClick={() => changeForm(null)}>Volver</p>
        <p>
          ¿Ya tienes Musicfy?{" "}
          <span onClick={() => changeForm("login")}>Inicia Sesión</span>{" "}
        </p>
      </div>
    </div>
  );
};
