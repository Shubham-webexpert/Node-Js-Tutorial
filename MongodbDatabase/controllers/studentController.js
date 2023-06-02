const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const Student = mongoose.model("Student");

router.get("/", (req, res) => {
  res.render("student/addOrEdit", {
    viewTitle: "Insert Student",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

const insertRecord = async (req, res) => {
  const student = new Student();

  student.fullName = req.body.fullName;
  student.email = req.body.email;
  student.mobile = req.body.mobile;
  student.city = req.body.city;

  await student.save()
    .then((doc) => {
      res.redirect("student/list");
    })
    .catch((err) => {
      console.log("Error during insert:" + err);
    })
};

const updateRecord = async (req, res) => {
  await Student.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true }
  )
    .then((doc) => {
      res.redirect("student/list");
    })
    .catch((err) => {
      console.log("Error during update:" + err);
    })
};

router.get("/list", async (req, res) => {
  await Student.find()
    .then((docs) => {
      res.render("student/list", {
        list: docs,
      });
    })
    .catch((err) => {
      console.log("Error in retrieval:" + err);
    });
});

router.get("/:id", async (req, res) => {
  await Student.findById(req.params.id)

  .then((doc)=>{
    res.render("student/addOrEdit", {
            viewTitle: "Update Student",
            student: doc,
          });
          console.log(doc);
  })
  .catch((err)=>{
    console.log("Error in retrieval:" + err);
  })
});

router.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndRemove(req.params.id)
  .then((doc)=>{
    res.redirect("/student/list");
  })
  .catch((err)=>{
    console.log("Error in deletion:" + err);
  })
});

module.exports = router;
