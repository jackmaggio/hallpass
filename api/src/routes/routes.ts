import express from "express";
import timeslip_routes from "./timeslip_routes";
import student_routes from "./student_routes";
const router = express.Router();

router.use("/timeslips", timeslip_routes);
router.use("/students", student_routes);
export default router;
