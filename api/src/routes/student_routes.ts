import express from "express";
import mockdata from "../data/students.json";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(JSON.stringify(mockdata.students));
  return mockdata.students;
});

router.post("/", (req, res) => {
  res.send(JSON.stringify(mockdata.students));
  return mockdata.students;
});

router.put("/:id", (req, res) => {
  res.send(JSON.stringify(mockdata.students));
  return mockdata.students;
});

router.delete("/:id", (req, res) => {
  res.send(JSON.stringify(mockdata.students));
  return mockdata.students;
});

export default router;
