import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

import FormikField from "./FormikField/index";
import { makeStyles } from "@material-ui/core";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};
const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .lowercase()
    .email("Must be a valid email!")
    .required("Required!"),
  password: Yup.string()
    .matches(lowercaseRegex, "one lowercase required!")
    .matches(uppercaseRegex, "one uppercase required!")
    .matches(numericRegex, "one number required!")
    .min(8, "Minimum 8 characters required!")
    .required("Required!"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "40%",
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "20px",
    margin: "20px",
  },
}));
export default function Login(props: any) {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SigninSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="email" label="Email" required />
              <FormikField
                name="password"
                label="Password"
                required
                type="password"
              />

              <Button
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
