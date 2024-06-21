import express from "express";
import mockdata from "../data/slips.json";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(JSON.stringify(mockdata.timeslips));
  return mockdata.timeslips;
});

router.get("/:id", (req, res) => {
  for (const slip of mockdata.timeslips) {
    if (String(slip.id) == req.params.id) {
      res.send(slip);
    }
  }
});

router.post("/", (req, res) => {
  res.send(JSON.stringify(mockdata.timeslips));
  return mockdata.timeslips;
});

router.put("/:id", (req, res) => {
  res.send(JSON.stringify(mockdata.timeslips));
  return mockdata.timeslips;
});

router.delete("/:id", (req, res) => {
  res.send(JSON.stringify(mockdata.timeslips));
  return mockdata.timeslips;
});

export default router;
