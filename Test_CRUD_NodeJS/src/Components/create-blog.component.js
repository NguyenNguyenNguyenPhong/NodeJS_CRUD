
// CreateStudent Component for add new student
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./BlogForm";
  
// CreateStudent Component
const CreateStudent = () => {
  const [formValues, setFormValues] = 
    useState({ title: '', content: '', category: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
'http://localhost:4000/students/create-student', 
    studentObject)
      .then(res => {
        if (res.status === 200)
          alert('collection successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <StudentForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create collection
    </StudentForm>
  )
}
  
// Export CreateStudent Component
export default CreateStudent