
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <h6>nhập tên</h6>
            <Field name="title" type="text"
              className="form-control" />
            <ErrorMessage
              name="title"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <h6>nhập nội dung</h6>
          <FormGroup>
            <Field name="content" type="text"
              className="form-control" />
            <ErrorMessage
              name="content"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <h6>nhập category</h6>
          <FormGroup>
            <Field name="category" type="text"
              className="form-control" />
            <ErrorMessage
              name="category"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg"
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;