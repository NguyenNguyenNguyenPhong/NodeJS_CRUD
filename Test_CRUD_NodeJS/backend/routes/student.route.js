let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Student Model
let studentSchema = require("../models/Student");
  
// CREATE Student
router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body)
  .then(data => {
    res.json(data)})
  .catch(
      err => {
        console.log(err) 
        res.json(err)
  });
})
  
// READ Students
router.get("/", (req, res) => {
  studentSchema.find({}).then(data => {res.json(data)}).catch(err => res.send(err))  
});
  
// UPDATE student
router
  .route("/update-student/:id")
  // Get Single Student
  .get((req, res) => {
    studentSchema.findById(

      req.params.id).then(data => {
        res.json(data)
        console.log(req.params)})
        .catch(err => {
          console.log(err)
          res.send(err)})
  })
  
  // Update Student Data
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      }).then(data =>  {          
        res.json(data);
        console.log("Student updated successfully !");
      }).catch(error => {
        console.log(error);    
        return next(error);
       
      })
    }
    );
  
// Delete Student
router.delete("/delete-student/:id", 
(req, res, next) => {
  studentSchema.findByIdAndRemove(
      req.params.id).then(data => {
        res.status(200).json({
          msg: data,
        })
      });
    }
  );

  
module.exports = router;