// EditStudent Component for update student data
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./BlogForm";
import { useParams } from 'react-router-dom';
  
// EditStudent Component
const EditStudent = (props) => {
  const {id} = useParams();

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    category: "",
  });
    
  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          id,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("collection successfully updated");
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
        console.log(err)});
  };
  
  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/update-student/" 
        + id
      )
      .then((res) => {
        console.log(res)
        const { title, content, category } = res.data;
        setFormValues({ title, content, category });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return student form
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update collection
    </StudentForm>
  );
};
  
// Export EditStudent Component
export default EditStudent;